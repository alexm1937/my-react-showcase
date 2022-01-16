import React from "react";

function Project(props) {
    //array containing proj objects
    const {projects = [] }  = props;

    return (
        // console.log(projects)
        <div>

        {/* map over each project and return a card? */}
        {projects.map((project) => (

        <div 
        className={"card"}
        key={project.title}        
        // style="width: 18rem;"
        >
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{project.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            </ul>
            <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
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