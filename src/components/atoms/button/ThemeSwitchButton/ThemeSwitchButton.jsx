import React, { useState, useEffect } from 'react';
import './ThemeSwitch.css';

function ThemeSwitch() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <label className="theme-switch">
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
        aria-label="Toggle Theme"
      />
      <span className="slider" />
    </label>
  );
}

export default ThemeSwitch;
