import { useState } from 'react';
import './App.css';
import './styles/main.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WelcomeModal from './components/WelcomeModal';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <WelcomeModal />
      <Header />
      <Navigation onNavClick={handleNavClick} activeSection={activeSection} />
      
      <main className="container">
        {activeSection === 'about' && <About />}
        {activeSection === 'portfolio' && <Portfolio />}
        {activeSection === 'contact' && <Contact />}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;