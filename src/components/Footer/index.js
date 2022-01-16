import React from "react";

function Footer() {

    return (
        <div className="container-fluid px-2 bg-6">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
          
          {/* Left side text */}
          <div className="col-md-4 d-flex align-items-center">
            <span className="text-muted">© 2022 Alex McDaniel</span>
          </div>
          
          {/* Right side icons and links */}
          <div>
            <span>
                <a href="https://github.com/alexm1937" target="_blank" className="text-decoration-none mx-1">GitHub<i className="bi bi-github mx-2"></i></a>
                |
                <a href="https://linkedin.com/in/alex-mcdaniel-64ba59219" target="_blank" className="text-decoration-none mx-2">LinkedIn<i className="bi bi-facebook mx-1"></i></a>
                |
                <a href="https://stackoverflow.com/users/16672511/alex-mcdaniel" target="_blank" className="text-decoration-none mx-2">Stack Overflow<i className="bi bi-github mx-1"></i></a>
            </span>
          </div>  

        </footer>
      </div>
    );
}

export default Footer;