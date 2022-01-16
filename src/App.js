import React, { useState } from 'react';
// import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
// import Project from './components/Project';
// import Resume from './components/Resume';
// import Footer from './components/Footer';

function App() {
  const [sections] = useState([
    {
      name: 'about',
      description: 'About Me Page',
    },
    { name: 'portfolio', description: 'Portfolio of my work' },
    { name: 'contact', description: 'How to get ahold of me' },
    { name: 'resume', description: 'My resume page' },
  ]);
  const [currentSection, setCurrentSection] = useState(sections[0]);

  //returns html body 
  return (
    <div>
      <Header
      sections = {sections}
      setCurrentSection={setCurrentSection}
      currentSection={currentSection}
      ></Header>

      <main>
        { currentSection === sections[0] && <About></About> }
        { currentSection === sections[2] && <ContactForm></ContactForm> }
      </main>
    </div>
  );
}

export default App;
