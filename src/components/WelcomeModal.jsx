import { useState, useEffect } from 'react';

const WelcomeModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, показывали ли уже приветствие в этой сессии
    const hasSeenWelcome = sessionStorage.getItem('welcomeShown');

    if (!hasSeenWelcome) {
      // Ждем 1 секунду после загрузки страницы
      const timer = setTimeout(() => {
        setIsVisible(true);
        document.body.style.overflow = 'hidden'; // Блокируем скролл
        sessionStorage.setItem('welcomeShown', 'true');
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setIsVisible(false);
    document.body.style.overflow = 'auto'; // Разблокируем скролл
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Закрытие по Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isVisible) {
        closeModal();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="welcome-modal active" onClick={handleOverlayClick}>
      <div className="welcome-content">
        <h2>👋 Привет, Дорогой посетитель!</h2>
        <p>Рад видеть тебя на моей странице портфолио!</p>
        <p>
          Здесь ты можешь посмотреть мои работы, навыки и опыт. Я
          специализируюсь на современной фронтенд-разработке с использованием
          React, Next.js и TypeScript.
        </p>
        <p>Готов к новым вызовам и интересным проектам!</p>
        <button className="welcome-btn" onClick={closeModal}>
          Смотреть портфолио
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;