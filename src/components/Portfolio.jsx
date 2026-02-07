import { useState } from "react";
import { portfolioItems } from "../data";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeItems, setActiveItems] = useState(portfolioItems);

  const filters = [
    { id: "all", label: "Все проекты" },
    { id: "web", label: "Веб-приложения" },
    { id: "mobile", label: "Мобильные" },
    { id: "design", label: "Дизайн" },
  ];

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    if (filter === "all") {
      setActiveItems(portfolioItems);
    } else {
      setActiveItems(portfolioItems.filter((item) => item.category === filter));
    }
  };

  const viewProjectDetails = (projectId) => {
    const project = portfolioItems.find((item) => item.id === projectId);
    if (project) {
      alert(
        `Проект: ${project.title}\n\nОписание: ${project.description}\n\nКатегория: ${getCategoryName(project.category)}`,
      );
    }
  };

  const getCategoryName = (category) => {
    const categories = {
      web: "Веб-приложение",
      mobile: "Мобильное приложение",
      design: "Дизайн",
    };
    return categories[category] || category;
  };

  return (
    <section id="portfolio" className="section">
      <h2 className="section-title">Мои работы</h2>

      <div className="portfolio-filter">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
            onClick={() => handleFilter(filter.id)}
            data-filter={filter.id}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {activeItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img src={item.image} alt={item.title} className="portfolio-img" />
            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button
                className="view-project-btn"
                onClick={() => viewProjectDetails(item.id)}
                style={{
                  marginTop: "10px",
                  background: "#f0f0f0",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Подробнее
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
