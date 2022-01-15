import React from "react";

function Nav() {
// const {} = props;

    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid d-flex flex-wrap">
            <a className="navbar-brand" href="#">Alex M</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav  d-flex flex-wrap">
                    <a className="nav-link" href="#">About Me</a>
                    <a className="nav-link" href="#">Portfolio</a>
                    <a className="nav-link" href="#">Contact Me</a>
                    <a className="nav-link" href="#">Resume</a>
                </div>
            </div>
        </div>
        </nav>
    );      
}
export default Nav;