import { useEffect, useState } from 'react';

const Footer = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [showLinkedInModal, setShowLinkedInModal] = useState(false);

  useEffect(() => {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(now.toLocaleDateString('ru-RU', options));
  }, []);

  const handleLinkedInClick = (e) => {
    e.preventDefault();
    setShowLinkedInModal(true);
  };

  const closeModal = () => {
    setShowLinkedInModal(false);
  };

  return (
    <>
      <footer>
        <div className="container">
          <div className="social-links">
            <a
              href="https://github.com/Kir92"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://t.me/kir92l" 
              className="social-link" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-telegram"></i>
            </a>
            <a
              href="https://vk.com/id89223870"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-vk"></i>
            </a>
            <a 
              href="#" 
              className="social-link" 
              onClick={handleLinkedInClick}
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <p>&copy; 2026 Лучкин Кирилл. Все права защищены.</p>
          <p className="date-footer">{currentDate}</p>
        </div>
      </footer>

      {/* Модальное окно LinkedIn */}
      {showLinkedInModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-icon">
              <i className="fab fa-linkedin"></i>
            </div>
            <h2>Профиль LinkedIn</h2>
            <p>Профиль пока не создан, планируются работы в будущем.</p>
            <p className="modal-note">Следите за обновлениями!</p>
            <button className="modal-close-btn" onClick={closeModal}>
              Понятно
            </button>
          </div>
        </div>
      )}

      {/* Добавляем стили для модального окна */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1001;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background: white;
          padding: 2.5rem;
          border-radius: 15px;
          max-width: 400px;
          width: 90%;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.3s ease;
        }

        .modal-icon {
          font-size: 3rem;
          color: #0077b5;
          margin-bottom: 1rem;
        }

        .modal-content h2 {
          color: #333;
          margin-bottom: 1rem;
        }

        .modal-content p {
          color: #666;
          line-height: 1.5;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .modal-note {
          color: #888;
          font-style: italic;
        }

        .modal-close-btn {
          background: linear-gradient(to right, #6a11cb, #2575fc);
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 30px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          margin-top: 1.5rem;
        }

        .modal-close-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(106, 17, 203, 0.4);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Footer;