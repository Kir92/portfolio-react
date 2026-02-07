import { skills, statsData } from "../data";

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">Обо мне</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Frontend-разработчик с 3+ годами опыта, специализируюсь на создании
            современных, высокопроизводительных и SEO-дружественных
            веб-приложений на стеке React/Next.js и TypeScript. Обладаю глубоким
            пониманием полного цикла разработки — от проектирования архитектуры
            до развертывания и мониторинга. Моя основная экспертиза лежит в
            области Next.js 15+ и его продвинутых парадигм, таких как React
            Server Components (RSC) и гибридные модели рендеринга (SSR, SSG,
            ISR), что позволяет создавать приложения с оптимальным балансом
            производительности, динамичности и поискового ранжирования.
          </p>

          <p>
            - Моя страсть - создавать интуитивно понятные, эффективные и
            визуально привлекательные пользовательские интерфейсы. Я постоянно
            изучаю новые технологии и методы разработки, чтобы оставаться в
            курсе последних тенденций.
          </p>

          <h3 className="skills-title">Мои навыки</h3>
          <div className="skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="about-stats">
          <h3>Статистика</h3>
          <div className="stats-margin">
            {statsData.map((stat, index) => (
              <div key={index} style={{ marginBottom: "1rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                  }}
                >
                  <span>{stat.label}</span>
                  <span style={{ fontWeight: "bold" }}>{stat.value}</span>
                </div>
                <div
                  style={{
                    height: "8px",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="stats-bar"
                    style={{
                      height: "100%",
                      width: `${stat.value * 4}%`,
                      background: "linear-gradient(to right, #6a11cb, #2575fc)",
                      borderRadius: "4px",
                      transition: "background 0.3s ease !important",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
