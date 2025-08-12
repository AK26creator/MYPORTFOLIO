import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => 'light');

  useEffect(() => {
    // Force light theme
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, [theme]);

  const toggleTheme = () => {
    // No-op to keep light theme
    setTheme('light');
  };

  return { theme, toggleTheme };
};