import React from "react";

function Resume() {

    return(
        <div className="bg-4 container-fluid">
            <div className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                <p className="fs-4 my-0 mx-auto">You can download my resume <a href="https://docs.google.com/document/d/1wVHyrXYbDba2zHNYVDdzNSRwQcsDPO-2iEyGSCS4ccs/edit?usp=sharing" target="_blank" className="text-decoration-none">right-here</a>, or see a summary of my skills below!</p>
                <p className="fs-6 mx-auto">(NOTE: You will be directed to Google Drive. Simply click file, then click download and select your preffered format!)</p>

            </div>

            <div className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                <div className="col-4">
                    <h3>Front End Tech</h3>
                    <ul>
                        <li className="fs-5">HTML/CSS and Frameworks</li>
                    </ul>
                    <ul>
                        <li className="fs-5">Javascript</li>
                    </ul>
                    <ul>
                        <li className="fs-5">Jquery and Various JS Libraries</li>
                    </ul>
                    <ul>
                        <li className="fs-5">Web, Third Party and Server-Side API's</li>
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

                <div className="col-4">
                    <h3>Back End Tech</h3>
                    <ul>
                        <li className="fs-5">Node.JS</li>
                    </ul>
                    <ul>
                        <li className="fs-5">NPM libraries</li>
                    </ul>
                    <ul>
                        <li className="fs-5">Express.js</li>
                    </ul>
                    <ul>
                        <li className="fs-5">SQL Databases</li>
                    </ul>
                    <ul>
                        <li className="fs-5">NoSQL Databases</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Resume;