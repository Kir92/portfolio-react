import { useState } from "react";
import { hobbiesItems } from "../data";

const Hobbies = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeItems, setActiveItems] = useState(hobbiesItems);

  const filters = [
    { id: "all", label: "Все увлечения" },
    { id: "sport", label: "Спорт" },
    { id: "games", label: "Игры" },
    { id: "music", label: "Музыка и Кино" },
    { id: "creative", label: "Путешествия" },
  ];

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    if (filter === "all") {
      setActiveItems(hobbiesItems);
    } else {
      setActiveItems(hobbiesItems.filter((item) => item.category === filter));
    }
  };

  const getCategoryName = (category) => {
    const categories = {
      sport: "Спорт",
      games: "Игры",
      music: "Музыка",
      creative: "Творчество",
    };
    return categories[category] || category;
  };

  const viewHobbyDetails = (hobbyId) => {
    const hobby = hobbiesItems.find((item) => item.id === hobbyId);
    if (hobby) {
      alert(
        `Увлечение: ${hobby.title}\n\nОписание: ${hobby.description}\n\nКатегория: ${getCategoryName(hobby.category)}`,
      );
    }
  };

  return (
    <section className="hobbies-section">
      <h2 className="section-title">Мои увлечения</h2>
     

      <div className="hobbies-filter">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`hobby-filter-btn ${activeFilter === filter.id ? "active" : ""}`}
            onClick={() => handleFilter(filter.id)}
            data-filter={filter.id}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="hobbies-grid">
        {activeItems.map((item) => (
          <div key={item.id} className="hobby-card">
            <div className="hobby-image">
              <img
                src={item.image}
                alt={item.title}
                className="hobby-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/portfolio-react/image/default-hobby.jpg";
                }}
              />
            </div>
            <div className="hobby-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              
              <button
                className="view-hobby-btn"
                onClick={() => viewHobbyDetails(item.id)}
                style={{
                  marginTop: "10px",
                  background: "#f0f0f0",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "block",
                  width: "100%",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "var(--gradient-secondary)";
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#f0f0f0";
                  e.target.style.color = "black";
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

export default Hobbies;
