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
  //hooks and state of section
  const [currentSection, setCurrentSection] = useState(sections[0]);

  //project data (REQUIRES SIX PROJECTS)
  const [projects] = useState([
    {
      // img:
      title: 'NoSqlSocial',
      appLink: 'https://watch.screencastify.com/v/BIvs3Gw9DZzkuZkChlE2',
      repoLink: 'https://github.com/alexm1937/no-sql-social'
    },
    {
      // img:
      title: 'BlogSpot',
      appLink: 'https://infinite-dawn-27184.herokuapp.com/',
      repoLink: 'https://github.com/alexm1937/blogSpot'
    },
    {}
    ]);
  //hooks and state of project (hover or not)


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
        { currentSection === sections[1] && <Portfolio
        //props for portfolio and proj components:
        projects = {projects}
        ></Portfolio> }
        { currentSection === sections[2] && <ContactForm></ContactForm> }
        { currentSection === sections[3] && <Resume></Resume> }
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
