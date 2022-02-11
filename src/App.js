import React, { useState } from 'react';
import Header from './components/Header'; //imports header (with nav components, and avart img)
import About from './components/About'; //About page content
import ContactForm from './components/Contact'; //contact page
import Portfolio from './components/Portfolio'; //Portfolio page (with project components)
import Resume from './components/Resume'; //resume 
import Footer from './components/Footer'; //footer
// imports below are props drilled down to/for project component
import img1 from "./assets/imgs/what-song.png";
import img6 from "./assets/imgs/readme.png";
import img5 from "./assets/imgs/hourly-planner.png";
import img4 from "./assets/imgs/gameblog.jpg";
import img2 from "./assets/imgs/blogspot.png";
import img3 from "./assets/imgs/02-run-buddy.jpg";
import img7 from "./assets/imgs/still-good.png";

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
      img: img3,
      title: 'Run Buddy',
      appLink: 'https://alexm1937.github.io/run-buddy/',
      repoLink: 'https://github.com/alexm1937/run-buddy',
      description: 'This website is for a mock gym, to show what a polished website I can build for your customers to see.'
    },
    {
      img: img2,
      title: 'BlogSpot',
      appLink: 'https://infinite-dawn-27184.herokuapp.com/',
      repoLink: 'https://github.com/alexm1937/blogSpot',
      description: "This is a simple blog website I built, both the minimum functionality front end, as well as the back end server app, API's, and database structure. This allows the creation of user account, logging in and out, as well as posting, commenting on other posts, editting and deleting. This app is deployed live; you can see how it works for yourself. Built using node.js, mysql, sequelize and express primarily."
    },
    {
      img: img7,
      title: 'Still Good',
      appLink: 'https://pacific-bayou-24755.herokuapp.com/itemList',
      repoLink: 'https://github.com/alexm1937/still-good',
      description: 'This is our final group project! Tons of packagaes and dependencies used, we built a fully functional PWA to keep track of perishables!'
    },
    {
      img: img1,
      title: 'What Is That Song',
      appLink: 'https://alexm1937.github.io/what-is-that-song/',
      repoLink: 'https://github.com/alexm1937/what-is-that-song',
      description: 'This was a school group project I built with a partner. We had to use and interact with a third party server API. We built this front end web application to search for songs, and give us information such as the album, lyrcics and more, in a clean and easy to use package.'
    },
    {
      img: img4,
      title: 'GameSpotBlog',
      appLink: 'https://tranquil-tor-89831.herokuapp.com/',
      repoLink: 'https://github.com/alexm1937/gameSpotBlog',
      description: "Here is another group project I built with 3 other partners. We created the entirety from the front end, to the back end server and API's using node.js, express, mysql and sequelize primarily, allowing very similiar functions to my own personal blog above."
    },
    {
      img: img5,
      title: 'Hourly Work Planner',
      appLink: 'https://alexm1937.github.io/hourly-work-planner/',
      repoLink: 'https://github.com/alexm1937/hourly-work-planner',
      description: 'This is a simple Javascript based application I built. It it very much what the name indicates: an hourly work planner. There are 8 slots: One for each hour of a typical 9am to 5pm office job. Enter, save, edit and delete tasks, and these are stored in the browsers localstorage.'
    },
    {
      img: img6,
      title: 'ReadMe-Generator',
      appLink: 'https://watch.screencastify.com/v/xOA9DzGpCk6acVz6sZGn',
      repoLink: 'https://github.com/alexm1937/ReadMe-Generator',
      description: "This is a command line application I built to speed up my development time. README files are essential to any project; many of them include much of the same information in a similiar format. This app asks questions, you type and enter the answsers, and a readme will be generate!"
    }
  ]);

  //returns html body 
  return (
    <div>
      <Header
      //props (sections) and hooks going to header and then to nav
      sections = {sections}
      setCurrentSection={setCurrentSection}
      currentSection={currentSection}
      ></Header>

      <main>
        {/* if statements to check if objs in sectionsArr[at given Arr position] are equal to currentSection{}. 
        If match, render component */}
        { currentSection === sections[0] && <About></About> }
        { currentSection === sections[1] && <Portfolio
        //props for portfolio / proj components:
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
