import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const buttonStyles = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: isDarkMode ? '#8a2be2' : '#6a11cb',
    color: '#ffffff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    zIndex: '10'
  };

  return (
    <button 
      style={buttonStyles}
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Переключить на светлую тему' : 'Переключить на темную тему'}
    >
      {isDarkMode ? (
        <>
          <i className="fas fa-sun"></i>
          <span>Светлая тема</span>
        </>
      ) : (
        <>
          <i className="fas fa-moon"></i>
          <span>Темная тема</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;