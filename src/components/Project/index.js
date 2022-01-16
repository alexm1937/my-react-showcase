import React from "react";


function Project(props) {
    //array containing proj objects
    const {projects = [] }  = props;
    
    return (
        // console.log(projects)
        <div className="d-flex flex-wrap">

        {/* map over each project and return a card? */}
        {projects.map((project) => (

        <div 
        className="card col-9 col-sm-5 m-4 mx-auto"
        key={project.title}
        >
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href={project.repoLink} target="_blank" className="card-link">Repo Link</a>
            <a href={project.appLink} target="_blank" className="card-link">Live Link</a>
            </div>
        </div>
        ))}
            {/* <a href='#'
            //short circuit expression to highlight current section
            className={`nav-link fw-bold ${currentSection.name === section.name && `active aria-current`} `}
            key={section.name}  
            //gives onClick function to each btn
            onClick={() => { setCurrentSection(section);}}> */}
            {/* gives text value of name to btn and capitalizes first letter
            {capitalizeFirstLetter(section.name)} </a>  */}



        </div>
    );
}

export default Project;