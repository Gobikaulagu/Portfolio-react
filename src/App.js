import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Internship from './components/Internship';

import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <Skills />
        <Projects />
        <Certificates />
        <Internship />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
