import React from 'react';
import './home.css';

function Home(){
    return(
        <div className="home-container">
            <div className="landing-img-container">
                <h1>BECAUSE MUSIC SOUNDS BETTER WITH YOU</h1>
                <img src="images/landing_bg.png" alt=""/>
            </div>
            <div className="landing-content">
                <div className="row box">
                    <div className="col s12">
                        <div className="row">
                            <div className="content-header">
                                <span>WHAT IS STICKY FINGERS?</span>
                            </div>
                            <span className="col s8"></span>
                        </div>
                        <div className="row">
                            <div className="col s12 m6">
                                <p className="content-copy">Sticky Fingers is a web community built for people with a tremendous love for music by a team with its own tremendous love for music. Sticky Fingers is a website where users can share their own record collections with the site's userbase and the web at large.</p>
                            </div>
                            <div className="col s12 m6">
                                <p className="content-copy">Users can befriend each other through the website and share records with each other with the use of our handy trading system. Users pick a send-off and return date for their trade, and then select a record each to send to the other.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row box">
                    <div className="col s12">
                        <div className="row">
                            <div className="content-header">
                                <span>WHY USE STICKY FINGERS?</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m6">
                                <p className="content-copy">Sticky Fingers makes it incredibly easy to find whatever record you're looking for. Our search engine scours a tremendous database for all of the important information on whatever record you're looking for. Plus being able to trade with your friends is super simple and easy to keep track of with our user interface.</p>
                            </div>
                            <div className="col s12 m6">
                                <p className="content-copy">Most key to our M.O. is the desire to set up a friendly environment for people to share their fascinations with music. We feel that music is most fun when you can share it with people you really like. As such, we try to ensure that our users are treated well by each other as well as by our own team here at Sticky Fingers headquarters.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row box">
                    <div className="col s12">
                        <div className="row">
                            <div className="content-header">
                                <span>HOW CAN I JOIN?</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m6">
                                <p className="content-copy">It's very easy to join the Sticky Fingers community (as it should be with any good community). All you have to do is click the register link on the navbar above, which will take you to our registration form.</p>
                            </div>
                            <div className="col s12 m6">
                                <p className="content-copy">From there just input your information as requested. Once you've completed your profile, you'll be able to start befriending people and building up your collection on the site. We look forward to you joining our community very soon!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;