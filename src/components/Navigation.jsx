const Navigation = ({ onNavClick, activeSection }) => {
  const sections = [
    { id: 'about', label: 'Обо мне' },
    { id: 'portfolio', label: 'Портфолио' },
      { id: 'hobbies', label: 'Увлечения' },
    { id: 'contact', label: 'Контакты' },
  ];

  const handleClick = (e, section) => {
    e.preventDefault();
    onNavClick(section);
    
    // Плавная прокрутка к началу страницы (можно убрать если не нужно)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav>
      <div className="container nav-container">
        {sections.map(section => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
            onClick={(e) => handleClick(e, section.id)}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;