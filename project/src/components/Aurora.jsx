import React, { useRef, useEffect } from 'react';
import { Renderer, Program, Mesh, Triangle, Vec2 } from 'ogl';
import './Aurora.css';

const vertex = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_color1;
uniform vec3 u_color2;
uniform vec3 u_color3;
uniform float u_blend;
uniform float u_amplitude;
uniform float u_speed;

vec3 palette(float t) {
  vec3 a = vec3(0.5, 0.5, 0.5);
  vec3 b = vec3(0.5, 0.5, 0.5);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.263, 0.416, 0.557);
  
  return a + b * cos(6.28318 * (c * t + d));
}

float noise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float smoothNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  
  float a = noise(i);
  float b = noise(i + vec2(1.0, 0.0));
  float c = noise(i + vec2(0.0, 1.0));
  float d = noise(i + vec2(1.0, 1.0));
  
  vec2 u = f * f * (3.0 - 2.0 * f);
  
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 st) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 0.0;
  
  for (int i = 0; i < 5; i++) {
    value += amplitude * smoothNoise(st);
    st *= 2.0;
    amplitude *= 0.5;
  }
  
  return value;
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  st.x *= u_resolution.x / u_resolution.y;
  
  vec2 pos = st * 3.0;
  
  float time = u_time * u_speed;
  
  // Create flowing aurora effect
  float n1 = fbm(pos + vec2(time * 0.1, time * 0.05));
  float n2 = fbm(pos + vec2(time * 0.15, -time * 0.08) + n1 * 0.5);
  float n3 = fbm(pos + vec2(-time * 0.12, time * 0.1) + n2 * 0.3);
  
  // Combine noise layers
  float finalNoise = (n1 + n2 + n3) / 3.0;
  finalNoise = pow(finalNoise, 1.5) * u_amplitude;
  
  // Create aurora bands
  float bands = sin(pos.y * 8.0 + time + finalNoise * 5.0) * 0.5 + 0.5;
  bands = pow(bands, 2.0);
  
  // Color mixing
  vec3 color1 = u_color1 / 255.0;
  vec3 color2 = u_color2 / 255.0;
  vec3 color3 = u_color3 / 255.0;
  
  vec3 color = mix(color1, color2, finalNoise);
  color = mix(color, color3, bands * 0.7);
  
  // Add some shimmer
  float shimmer = sin(time * 2.0 + pos.x * 10.0 + finalNoise * 8.0) * 0.1 + 0.9;
  color *= shimmer;
  
  // Fade edges
  float fade = smoothstep(0.0, 0.3, st.y) * smoothstep(1.0, 0.7, st.y);
  fade *= smoothstep(0.0, 0.2, st.x) * smoothstep(1.0, 0.8, st.x);
  
  color *= fade;
  
  // Apply blend factor
  color *= u_blend;
  
  gl_FragColor = vec4(color, 1.0);
}
`;

const Aurora = ({ 
  colorStops = ["#3A29FF", "#FF94B4", "#FF3232"],
  blend = 0.5,
  amplitude = 1.0,
  speed = 0.5
}) => {
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const programRef = useRef(null);
  const meshRef = useRef(null);
  const animationRef = useRef(null);

  // Convert hex colors to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new Renderer({
      canvas,
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: true,
      premultipliedAlpha: false
    });

    const gl = renderer.gl;
    const geometry = new Triangle(gl);

    const color1 = hexToRgb(colorStops[0]);
    const color2 = hexToRgb(colorStops[1]);
    const color3 = hexToRgb(colorStops[2]);

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        u_time: { value: 0 },
        u_resolution: { value: new Vec2() },
        u_color1: { value: [color1.r, color1.g, color1.b] },
        u_color2: { value: [color2.r, color2.g, color2.b] },
        u_color3: { value: [color3.r, color3.g, color3.b] },
        u_blend: { value: blend },
        u_amplitude: { value: amplitude },
        u_speed: { value: speed }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });

    rendererRef.current = renderer;
    programRef.current = program;
    meshRef.current = mesh;

    const resize = () => {
      const { clientWidth, clientHeight } = canvas.parentElement;
      renderer.setSize(clientWidth, clientHeight);
      program.uniforms.u_resolution.value.set(clientWidth, clientHeight);
    };

    const animate = (time) => {
      program.uniforms.u_time.value = time * 0.001;
      renderer.render({ scene: mesh });
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate(0);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Update uniforms when props change
  useEffect(() => {
    if (programRef.current) {
      const color1 = hexToRgb(colorStops[0]);
      const color2 = hexToRgb(colorStops[1]);
      const color3 = hexToRgb(colorStops[2]);
      
      programRef.current.uniforms.u_color1.value = [color1.r, color1.g, color1.b];
      programRef.current.uniforms.u_color2.value = [color2.r, color2.g, color2.b];
      programRef.current.uniforms.u_color3.value = [color3.r, color3.g, color3.b];
      programRef.current.uniforms.u_blend.value = blend;
      programRef.current.uniforms.u_amplitude.value = amplitude;
      programRef.current.uniforms.u_speed.value = speed;
    }
  }, [colorStops, blend, amplitude, speed]);

  return <canvas ref={canvasRef} className="aurora-container" />;
};

export default Aurora;
