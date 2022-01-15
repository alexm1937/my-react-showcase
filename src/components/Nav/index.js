import React from "react";

function Nav() {
// const {} = props;

    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid d-flex flex-wrap">
            <a className="navbar-brand" href="#">Alex M</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div class="navbar-nav  d-flex flex-wrap">
                    <a class="nav-link" href="#">About Me</a>
                    <a class="nav-link" href="#">Portfolio</a>
                    <a class="nav-link" href="#">Contact Me</a>
                    <a class="nav-link" href="#">Resume</a>
                </div>
            </div>
        </div>
        </nav>
    );      
}
export default Nav;