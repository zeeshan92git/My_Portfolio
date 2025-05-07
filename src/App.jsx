import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import React, { useEffect } from 'react';

import About from './components/About.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import TechStack from './components/Stack.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
    // AOS animation
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      easing : 'linear',
      mirror: false,
      debounceDelay: 50
    });
  }, []);

  return (
    <>
      
      <div className="scroll-smooth  bg-gradient-to-r dark:from-gray-950 dark:via-gray-800 dark:to-gray-900 dark:text-white min-h-screen">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="stack">
          <TechStack />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}

export default App;
