import React from "react";
import Nav from '../Nav';
import avatart from '../../assets/imgs/avatarimg.jpg';

function Header() {
// const {} = props;
    return (
        <div>
            <Nav></Nav>
            <figure className="only-best">
            <h2>Only The Best!</h2>
            <img src={avatart} alt='avatar image' className="avatart"></img>
            </figure>
        </div>
    );      
}
export default Header;