import React, { useState } from 'react';
import Header from './components/Header'; //imports header (with nav components, and avart img)
import About from './components/About'; //About page content
import ContactForm from './components/Contact'; //contact page
import Portfolio from './components/Portfolio'; //Portfolio page (with project components)
import Resume from './components/Resume'; //resume
import Footer from './components/Footer'; //footer

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
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
