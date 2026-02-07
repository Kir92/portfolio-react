import './App.css';
import './styles/main.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main className="container">
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;