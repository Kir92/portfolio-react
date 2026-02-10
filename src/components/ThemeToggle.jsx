import { useTheme } from '../context/ThemeContext';
import '../styles/ThemeToggle.css'; // Импортируем из папки styles

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-wrapper">
      <input
        type="checkbox"
        id="theme-toggle"
        className="theme-toggle-checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
        aria-label="Переключить тему"
      />
      <label htmlFor="theme-toggle" className="theme-toggle-label">
        <div className="theme-toggle-track">
          <div className="theme-toggle-thumb">
            {isDarkMode ? (
              <i className="fas fa-moon"></i>
            ) : (
              <i className="fas fa-sun"></i>
            )}
          </div>
          <div className="theme-toggle-icons">
            <span className="theme-icon sun-icon">
              <i className="fas fa-sun"></i>
            </span>
            <span className="theme-icon moon-icon">
              <i className="fas fa-moon"></i>
            </span>
          </div>
        </div>
        <span className="theme-toggle-text">
          {isDarkMode ? 'Темная тема' : 'Светлая тема'}
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;