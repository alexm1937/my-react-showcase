import React, { useState } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    // const [sections] = useState([
    //     {
    //       name: 'about',
    //       description: 'About Me Page',
    //     },
    //     { name: 'portfolio', description: 'Portfolio of my work' },
    //     { name: 'contact', description: 'How to get ahold of me' },
    //     { name: 'resume', description: 'My resume page' },
    //   ]);
    // const [currentSection, setCurrentSection] = useState(sections[0]);
    const {
        sections = {},
        setCurrentSection,
        currentSection
    } = props; 

    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid d-flex flex-wrap">
            <a className="navbar-brand" href="#">Alex M</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav  d-flex flex-wrap">
                    {/* <a className="nav-link" href='#'>About Me</a>
                    <a className="nav-link" href="#">Portfolio</a>
                    <a className="nav-link" href="#">Contact Me</a>
                    <a className="nav-link" href="#">Resume</a> */}

                    {sections.map((section) => (
                        <a
                        className={`nav-link ${currentSection.name === section.name && `active aria-current`} `}
                        key={section.name}
                        >
                        <span
                            onClick={() => {
                            setCurrentSection(section);
                            }}
                        >
                            {capitalizeFirstLetter(section.name)}
                        </span>
                        </a>
                    ))}


                </div>
            </div>
        </div>
        </nav>
    );      
}
export default Nav;