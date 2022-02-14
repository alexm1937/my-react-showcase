import React from "react";

function Resume() {

    return(
        <div className="bg-6 container-fluid">
            <div className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                <p className="fs-4 my-0 mx-auto">You can download my resume <a href="https://docs.google.com/document/d/1wVHyrXYbDba2zHNYVDdzNSRwQcsDPO-2iEyGSCS4ccs/edit?usp=sharing" target="_blank" className="text-decoration-none">right-here</a>, or see a summary of my skills below.</p>
                <p className="fs-6 mx-auto">(PLEASE NOTE: You will be directed to Google Drive. Simply click 'file', and then click 'download' and select your preffered format.)</p>

            </div>

            <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                
                <div className="col-md-10 mx-auto">
                    <h3 className="text-center">Languages / Tools</h3>
                    <ul className="no-bullets text-center">
                        <li className="fs-5">Git, Github, Gitlab</li>
                        <li className="fs-5">HTML5</li>
                        <li className="fs-5">CSS, frameworks including Bootstrap and Tailwind</li>
                        <li className="fs-5">Javascript, Jquery and other JS Libraries</li>
                    </ul>
                </div>

                <div className="col-md-10 mx-auto">
                    <h3 className="text-center">Other Tech / Libraries / Tools</h3>
                    <ul className="no-bullets text-center">
                        <li className="fs-5">Web and Third Party API's</li>
                        <li className="fs-5">RESTful API's</li>
                        <li className="fs-5">Mobile Responsiveness</li>
                        <li className="fs-5">Progressive Web Apps</li>
                        <li className="fs-5">React</li>
                        <li className="fs-5">Node.JS and NPM </li>
                        <li className="fs-5">Express</li>
                        <li className="fs-5">SQL Databases, MySql, Sequelize</li>
                        <li className="fs-5">NoSQL Databases, MERN stack, MongoDB, Mongoose </li>
                        <li className="fs-5">Jest testing framework</li>
                    </ul>                    
                </div>

                <div className="col-md-10 mt-auto mx-auto">
                    <h3 className="text-center">Still Learning/Some experience:</h3>
                    <ul className="no-bullets text-center">
                        <li className="fs-5">GraphQL</li>
                        <li className="fs-5">indexedDB</li>
                        <li className="fs-5">Payment Handling with Stripe</li>
                    </ul>
                </div>

                {/* <div className="col-md-5 mx-auto">
                    <h3 className="text-center">Concepts:</h3>
                    <ul>
                        <li className="fs-5">Test Driven Development / TDD</li>
                    </ul>                    
                    <ul>
                        <li className="fs-5">Object Oriented Development / OOP</li>
                    </ul>                    
                </div> */}

            </div>
        </div>
    );
}

export default Resume;