import React from "react";
import Project from "../Project";

function Portfolio(props) {
    const { projects = {} } = props;

    return (
    <div className="bg-2">
        {/* <section className="work my-0" id="work"> */}
        <section className="work my-0" id="work">
        My Work
        </section>
        <Project
        //props for project data
        projects = {projects}
        ></Project>
    </div>
    );      
}
export default Portfolio;

