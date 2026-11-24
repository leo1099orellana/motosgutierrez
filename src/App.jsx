import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import BeforeAfter from './components/BeforeAfter.jsx';
import Brands from './components/Brands.jsx';
import Reviews from './components/Reviews.jsx';
import HowWeWork from './components/HowWeWork.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import { initTracking } from './lib/track.js';
import { useReveal } from './lib/useReveal.js';

export default function App() {
  useEffect(() => {
    initTracking();
  }, []);
  useReveal();

  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <BeforeAfter />
        <Brands />
        <Reviews />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
