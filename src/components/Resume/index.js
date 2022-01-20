import React from "react";

function Resume() {

    return(
        <div className="bg-6 container-fluid">
            <div className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                <p className="fs-4 my-0 mx-auto">You can download my resume <a href="https://docs.google.com/document/d/1wVHyrXYbDba2zHNYVDdzNSRwQcsDPO-2iEyGSCS4ccs/edit?usp=sharing" target="_blank" className="text-decoration-none">right-here</a>, or see a summary of my skills below.</p>
                <p className="fs-6 mx-auto">(NOTE: You will be directed to Google Drive. Simply click 'file', and then click 'download' and select your preffered format.)</p>

            </div>

            <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                <div className="col-md-4 mx-auto">
                    <h3 className="text-center">Front End Tech</h3>
                    <ul>
                        <li className="fs-5">HTML</li>
                    </ul>
                    <ul>
                        <li className="fs-5">CSS and frameworks such as Bootstrap and Tailwind</li>
                    </ul>
                    <ul>
                        <li className="fs-5">Javascript</li>
                    </ul>
                    <ul>
                        <li className="fs-5">Jquery and other JS Libraries</li>
                    </ul>
                    <ul>
                        <li className="fs-5">Web, Third Party API's</li>
                    </ul>
                    <ul>
                        <li className="fs-5">Mobile Responsiveness</li>
                    </ul>
                    <ul>
                        <li className="fs-5">Progressive Web Apps</li>
                    </ul>
                    <ul>
                        <li className="fs-5">React</li>
                    </ul>
                </div>

                <div className="col-md-4 mx-auto">
                    <h3 className="text-center">Back End Tech</h3>
                    <ul>
                        <li className="fs-5">NPM libraries</li>
                    </ul>                    
                    <ul>
                        <li className="fs-5">Node.JS</li>
                    </ul>
                    <ul>
                        <li className="fs-5">Express.js</li>
                    </ul>
                    <ul>
                        <li className="fs-5">RESTful API's</li>
                    </ul>
                    <ul>
                        <li className="fs-5">SQL Databases</li>
                    </ul>
                    <ul>
                        <li className="fs-5">MySql, Sequelize</li>
                    </ul>
                    <ul>
                        <li className="fs-5">NoSQL Databases</li>
                    </ul>
                    <ul>
                        <li className="fs-5">MongoDB, Mongoose</li>
                    </ul>
                    {/* <ul>
                        <li className="fs-5">GraphQL, indexedDB</li>
                    </ul> */}
                    {/* <ul>
                        <li className="fs-5">Payment Processing with Stripe</li>
                    </ul> */}
                    <ul>
                        <li className="fs-5">Jest testing framework</li>
                    </ul>
                </div>

                {/* <div className="col-md-4 mx-auto">
                    <h3 className="text-center">Concepts</h3>
                    <ul>
                        <li className="fs-5">Test Driven Development</li>
                    </ul>
                    <ul>
                        <li className="fs-5">Object Oriented Programming</li>
                    </ul>
                </div> */}

            </div>
        </div>
    );
}

export default Resume;