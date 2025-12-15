import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <div>
          <Navbar />
            <Home />
            <Skills />
            <Projects />
            <About />
            <Contact />
             <Footer />
       </div>
    </>
  )
}

export default App
