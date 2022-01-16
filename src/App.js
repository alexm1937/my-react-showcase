import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
// import Nav from './components/Nav';
// import Footer from './components/Footer';
// import Project from './components/Project';

function App() {

  //sections of my website
  const [sections] = useState([
    {
      name: 'about',
      description: 'About Me Page',
    },
    { name: 'portfolio', description: 'Portfolio of my work' },
    { name: 'contact', description: 'How to get ahold of me' },
    { name: 'resume', description: 'My resume page' },
  ]);
  //hooks and state 
  const [currentSection, setCurrentSection] = useState(sections[0]);

  //returns html body 
  return (
    <div>
      <Header
      //props going to header and nav
      sections = {sections}
      setCurrentSection={setCurrentSection}
      currentSection={currentSection}
      ></Header>

      <main>
        { currentSection === sections[0] && <About></About> }
        { currentSection === sections[1] && <Portfolio></Portfolio> }
        { currentSection === sections[2] && <ContactForm></ContactForm> }
        { currentSection === sections[3] && <Resume></Resume> }
      </main>
    </div>
  );
}

export default App;
