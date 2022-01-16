import React, { useState } from 'react';
import Header from './components/Header'; //imports header (with nav components, and avart img)
import About from './components/About'; //About page content
import ContactForm from './components/Contact'; //contact page
import Portfolio from './components/Portfolio'; //Portfolio page (with project components)
import Resume from './components/Resume'; //resume
import Footer from './components/Footer'; //footer
import img1 from "./assets/imgs/what-song.png";
import img6 from "./assets/imgs/readme.png";
import img5 from "./assets/imgs/hourly-planner.png";
import img4 from "./assets/imgs/gameblog.jpg";
import img2 from "./assets/imgs/blogspot.png";
import img3 from "./assets/imgs/02-run-buddy.jpg";

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
      img: img1,
      title: 'Run Buddy',
      appLink: 'https://alexm1937.github.io/run-buddy/',
      repoLink: 'https://github.com/alexm1937/run-buddy'
    },
    {
      img: img2,
      title: 'BlogSpot',
      appLink: 'https://infinite-dawn-27184.herokuapp.com/',
      repoLink: 'https://github.com/alexm1937/blogSpot'
    },
    {
      img: img3,
      title: 'What Is That Song',
      appLink: 'https://alexm1937.github.io/what-is-that-song/',
      repoLink: 'https://github.com/alexm1937/what-is-that-song'
    },
    {
      img: img4,
      title: 'GameSpotBlog',
      appLink: 'https://tranquil-tor-89831.herokuapp.com/',
      repoLink: 'https://github.com/alexm1937/gameSpotBlog'
    },
    {
      img: img5,
      title: 'Hourly Work Planner',
      appLink: 'https://alexm1937.github.io/hourly-work-planner/',
      repoLink: 'https://github.com/alexm1937/hourly-work-planner'
    },
    {
      img: img6,
      title: 'ReadMe-Generator',
      appLink: 'https://watch.screencastify.com/v/xOA9DzGpCk6acVz6sZGn',
      repoLink: 'https://github.com/alexm1937/ReadMe-Generator'
    }
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
