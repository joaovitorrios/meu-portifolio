import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import DynamicBackground from './components/DynamicBackground';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections: { [key: string]: JSX.Element } = {
    home: <Home />,
    about: <About />,
    languages: <Languages />,
    projects: <Projects />,
    contact: <Contact />,
    certificates: <Certificates />
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <DynamicBackground />
      
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-md z-50">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Portfolio</h1>
            
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex space-x-8">
              <Navigation 
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
              />
            </div>
          </nav>

          {mobileMenuOpen && (
            <div className="md:hidden bg-black/30 backdrop-blur-md">
              <div className="px-4 py-2 space-y-2">
                <Navigation 
                  currentSection={currentSection}
                  setCurrentSection={setCurrentSection}
                  mobile={true}
                  closeMobileMenu={() => setMobileMenuOpen(false)}
                />
              </div>
            </div>
          )}
        </header>

        <main className="pt-20 text-white">
          {sections[currentSection]}
        </main>

        <footer className="bg-black/30 backdrop-blur-md mt-20 py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/Joao895-pg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/joaovitorrios" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:joaovitorriosdev@gmail.com" 
                className="hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://www.instagram.com/_joaovitorrioss/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
            <p className="text-center mt-4 text-sm text-gray-400">
              © {new Date().getFullYear()} João Vitor Rios. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;