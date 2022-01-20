import React from "react";
import Nav from '../Nav';
import avatart from '../../assets/imgs/avatarimg.jpg';

function Header(props) {
    const {
        sections = {},
        setCurrentSection,
        currentSection
    } = props;

    return (
        <div>
            <Nav
                sections = {sections}
                setCurrentSection={setCurrentSection}
                currentSection={currentSection}
            ></Nav>
            <figure className="only-best">
            <img src={avatart} alt='avatar image' className="avatart"></img>
            </figure>
        </div>
    );      
}
export default Header;