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
            {/* image and link: */}
            <a href={project.appLink} target="_blank"><img src={project.img} className="img-list card-img-top"  alt=".a."/></a>
            {/* rest of card: */}
            <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
            <a href={project.repoLink} target="_blank" className="card-link">Repo Link</a>
            <a href={project.appLink} target="_blank" className="card-link">Live Link</a>
            </div>
        </div>
        ))}
        
        </div>
    );
}

export default Project;