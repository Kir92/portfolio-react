import { useState } from "react";

const Contact = () => {
  const [formMessage, setFormMessage] = useState("");
  const [formStatus, setFormStatus] = useState(""); // 'success' или 'error'

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // В реальном приложении здесь был бы API запрос
    // Имитация успешной отправки
    setFormMessage(
      `Спасибо, ${name}! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.`,
    );
    setFormStatus("success");

    // Очищаем форму
    e.target.reset();

    // Через 5 секунд очищаем сообщение
    setTimeout(() => {
      setFormMessage("");
      setFormStatus("");
    }, 5000);
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Контакты</h2>

      <div className="contact-container">
        <div className="contact-info">
          <p>
            *Свяжитесь со мной для обсуждения вашего проекта или сотрудничества.
            Я открыт к новым возможностям и интересным предложениям.
          </p>
          <p>_______________________________________________________________</p>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h3>Email</h3>
              <p id="email">kirillluchkin@icloud.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div>
              <h3>Телефон</h3>
              <p id="phone">+7 (920) 970-61-29</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h3>Локация</h3>
              <p>Москва, Россия</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="emailInput" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="emailInput"
                name="email"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="form-textarea"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Отправить сообщение
            </button>
            {formMessage && (
              <p id="form-message" className={`form-message ${formStatus}`}>
                {formMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
