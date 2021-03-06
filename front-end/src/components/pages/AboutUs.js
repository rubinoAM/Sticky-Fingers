import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function AboutUs(){
    return(
        <div className="home-container">
            <div className="row justify-content-center">
                <div className="col s10 offset-s1">
                    <div className="content-wrapper">
                        <center className="row profile-section">
                            <div className="col s12 justify-content-center">
                                <img className="profilePic" src="../../images/michael_headshot.jpeg" alt=""/>
                            </div>
                            <div className="col s12 justify-content-center">
                                <h1>MICHAEL RUBINO</h1>
                            </div>
                            <div className="col s12 d-flex justify-content-center about-links">
                                <a className="p-3" href="https://github.com/rubinoAM" target="blank"><img className="favicon" src="../../images/GitHub-Mark-64px.png" alt=""/></a>
                                <a className="p-3" href="https://www.linkedin.com/in/michael-rubino-developer/" target="blank"><img className="favicon" src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" alt=""/></a>
                            </div>
                            <div className="col s12 d-flex justify-content-center">
                                <p>
                                    A long-time designer in a number of industries (print media, video games, branding, web design, etc.), I've recently made my transition into web development and software engineering. If expediency, attention to detail, analytic thinking and a flair for bold aesthetics are things you value in a developer, we'll get along right as rain.
                                </p>
                            </div>
                        </center>

                        <center className="row profile-section">
                            <div className="col s12 justify-content-center">
                                <img className="profilePic" src="../../images/jr_headshot.png" alt=""/>
                            </div>
                            <div className="col s12 justify-content-center">
                                <h1>JR PRIESTMAN</h1>
                            </div>
                            <div className="col s12 d-flex justify-content-center about-links">
                                <a className="p-3" href="https://github.com/JRPriestman" target="blank"><img className="favicon" src="../../images/GitHub-Mark-64px.png" alt=""/></a>
                                <a className="p-3" href="https://www.linkedin.com/in/jrpriestman/" target="blank"><img className="favicon" src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" alt=""/></a>
                            </div>
                            <div className="col s12 d-flex justify-content-center">
                                <p>
                                    Hi, I'm JR, a software developer and business professional with experience in management and the logistics industry. In November of 2018, I joined the DigitalCrafts full stack immersive coding course to transform myself in to a full stack web developer. I find programming to be very addicting and exciting and something I've become rather passionate about. Over the past few months, I've built projects using Node.js, Express, Python, and several other technologies. Check out my GitHub or portfolio to see them in action. DigitalCrafts has also prepared me to become a perpetual learner in order to adapt to new technologies as needed. I'm scheduled to graduate from the program in March of 2019 and am actively seeking new job opportunities in the greater Atlanta area.
                                </p>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;