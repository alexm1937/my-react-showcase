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
                        <a href='#'
                        //short circuit expression to highlight current section
                        className={`nav-link fw-bold ${currentSection.name === section.name && `active aria-current`} `}
                        key={section.name}  
                        //gives onClick function to each btn
                        onClick={() => { setCurrentSection(section);}}>
                        {/* gives text value of name to btn and capitalizes first letter */}
                        {capitalizeFirstLetter(section.name)} </a> 
                    ))}
                </div>
            </div>
        </div>
        </nav>
    );      
}

export default Nav;