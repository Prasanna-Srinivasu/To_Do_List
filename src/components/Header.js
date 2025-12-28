import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

const Header = () => {
  const { getTheme, toggleTheme } = useContext(ThemeContext);
  const theme = getTheme();

  return (
    <header>
      <h1>Task Manager</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </nav>
    </header>
  );
};

export default Header;