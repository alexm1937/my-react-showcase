import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        sections = {},
        setCurrentSection,
        currentSection
    } = props; 

    return (
        <nav className="navbar navbar-expand navbar-light bg-4">
        <div className="container-fluid d-flex flex-wrap">
            <a className="navbar-brand fw-bold" href="#">Alex M</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav  d-flex flex-wrap">
                    {/* creates an <a> nav tag for every section in sectionsArr */}
                    {sections.map((section) => (
                        <a
                        className={`nav-link fw-bold ${currentSection.name === section.name && `active aria-current`} `}
                        key={section.name}
                        >
                        <span
                            // give each button a function to update state when clicked
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