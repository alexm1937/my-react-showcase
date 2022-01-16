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

  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected ] = useState(false);
  const [resumeSelected, setResumeSelected ] = useState(false);

  //returns html body 
  return (
    <div>
      <Header
      sections = {sections}
      setCurrentSection={setCurrentSection}
      currentSection={currentSection}
      ></Header>

      <main>
        {/* <About></About> */}
        <ContactForm></ContactForm>

        {/* {!aboutSelected ? (
        <>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
        </>
      ) : (
          <ContactForm></ContactForm>
        )} */}
        
      </main>
    </div>
  );
}

export default App;
