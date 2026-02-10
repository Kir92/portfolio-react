import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return false; // По умолчанию светлая тема
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light');
    
    const root = document.documentElement;
    
    if (isDarkMode) {
      // ТЕМНАЯ ТЕМА
      root.style.setProperty('--primary-color', '#8a2be2');
      root.style.setProperty('--secondary-color', '#4dabf7');
      root.style.setProperty('--accent-color', '#4a5568');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--text-light', '#ffffff');
      root.style.setProperty('--background-color', '#121212');
      root.style.setProperty('--background-dark', '#1e1e1e');
      root.style.setProperty('--border-color', '#333333');
      root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.5)');
      root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #8a2be2 0%, #4a5568 100%)');
      root.style.setProperty('--gradient-secondary', 'linear-gradient(to right, #8a2be2, #4dabf7)');
      
      document.body.className = 'dark-theme';
      document.documentElement.style.backgroundColor = '#1a1a2e';
    } else {
      // СВЕТЛАЯ ТЕМА
      root.style.setProperty('--primary-color', '#6a11cb');
      root.style.setProperty('--secondary-color', '#2575fc');
      root.style.setProperty('--accent-color', '#9ba5b6');
      root.style.setProperty('--text-color', '#030303');
      root.style.setProperty('--text-light', '#ffffff');
      root.style.setProperty('--background-color', '#8944d3');
      root.style.setProperty('--background-dark', '#333');
      root.style.setProperty('--border-color', '#080808');
      root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #6a11cb 0%, #9ba5b6 100%)');
      root.style.setProperty('--gradient-secondary', 'linear-gradient(to right, #6a11cb, #2575fc)');
      
      document.body.className = 'light-theme';
      document.documentElement.style.backgroundColor = '#8850c4';
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};