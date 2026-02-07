const Navigation = () => {
  const handleNavClick = (e, section) => {
    e.preventDefault();
    // Пока просто выводим в консоль, позже реализуем навигацию
    console.log(`Переход к секции: ${section}`);
  };

  return (
    <nav>
      <div className="container nav-container">
        <a 
          href="#about" 
          className="nav-link active" 
          onClick={(e) => handleNavClick(e, 'about')}
        >
          Обо мне
        </a>
        <a 
          href="#portfolio" 
          className="nav-link" 
          onClick={(e) => handleNavClick(e, 'portfolio')}
        >
          Портфолио
        </a>
        <a 
          href="#contact" 
          className="nav-link" 
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Контакты
        </a>
      </div>
    </nav>
  );
};

export default Navigation;