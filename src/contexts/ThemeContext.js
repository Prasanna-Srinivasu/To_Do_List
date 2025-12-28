import { createContext } from 'react';

export const ThemeContext = createContext();

export function createThemeManager() {
  let theme = localStorage.getItem('theme') || 'light';

  const toggleTheme = () => {
    theme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.body.className = theme;
    return theme;
  };

  const getTheme = () => theme;

  document.body.className = theme;

  return { getTheme, toggleTheme };
}

export const ThemeProvider = ({ children }) => {
  const themeManager = createThemeManager();

  return (
    <ThemeContext.Provider value={themeManager}>
      {children}
    </ThemeContext.Provider>
  );
};