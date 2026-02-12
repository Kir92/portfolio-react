import { useState } from "react";

const Contact = () => {
  const [formMessage, setFormMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    
    formData.get("email");
    formData.get("message");

    setFormMessage(
      `Спасибо, ${name}! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.`,
    );
    setFormStatus("success");

    e.target.reset();

    setTimeout(() => {
      setFormMessage("");
      setFormStatus("");
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Контакты</h2>

        <div className="contact-wrapper">
          <div className="contact-info">
            <p className="contact-description">
              Свяжитесь со мной для обсуждения вашего проекта или сотрудничества.
              Я открыт к новым возможностям и интересным предложениям.
            </p>

            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href="mailto:kirillluchkin@icloud.com">kirillluchkin@icloud.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-details">
                  <h3>Телефон</h3>
                  <a href="tel:+79209706129">+7 (920) 970-61-29</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h3>Локация</h3>
                  <p>Москва, Россия</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ваше имя"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Ваше сообщение..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Отправить сообщение
              </button>
              
              {formMessage && (
                <div className={`form-message ${formStatus}`}>
                  {formMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;