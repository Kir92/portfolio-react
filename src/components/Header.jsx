import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header>
      <div className="container">
        <ThemeToggle />
        <img src="/image/kir.jpg" alt="Фото профиля" className="profile-img" />
        <h1 className="name">Лучкин Кирилл</h1>
        <p className="tagline">Frontend-разработчик и UI/UX дизайнер</p>
        <p>
          Разрабатываю высокопроизводительные, SEO-оптимизированные
          веб-приложения с использованием Next.js 15+, React 19+ и TypeScript.
        </p>
      </div>
    </header>
  );
};

export default Header;