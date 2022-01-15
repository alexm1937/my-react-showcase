import React from "react";
import Nav from '../Nav';

function Header() {
// const {} = props;
    return (
        <div>
            <Nav></Nav>
            <figure className="only-best">
            <h2>Only The Best!</h2>
            </figure>
        </div>
    );      
}
export default Header;