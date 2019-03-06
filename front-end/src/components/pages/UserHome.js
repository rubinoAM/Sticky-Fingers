import React from 'react';
import './userHome.css';

function UserHome(){


        return(
            
            <div className="home-container">
                <div className="home-header row">
                    <div className="headshot-div col s12 m3">
                        <img src="https://placehold.it/200x200" className="headshot" alt="" />
                    </div>
                    <div className="banner col s12 m9">
                        <h2>USER NAME</h2>
                        <p>Personalized Tag Line</p>
                        <p>Member since</p>
                    </div>
                </div>
                <div className="home-body container">
                    <div className="row">
                        <div className="navPanel col s12 m3">
                            <div className="row">
                                <ul className="navOptions col s12">
                                    <li className="navOption" id="collection"><a href="#">Collection</a></li>
                                    <li className="navOption"><a href="#">Friends</a></li>
                                    <li className="navOption"><a href="#">Trades</a></li>
                                    <li className="navOption"><a href="#">History</a></li>
                                    <li className="navOption"><a href="#">Preferences</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="dashboard col s12 m9">
                            <div className="dashboard-item">
                                <span className="dashboard-item-label">Collection</span>
                                <span className="dashboard-item-content">Content</span>
                                <span className="dashboard-item-link"><a href="#">Collections Page</a></span>
                                <div className="line"></div>
                            </div>
                            
                            <div className="dashboard-item">Friends</div>
                            <div className="dashboard-item">Trades</div>
                            <div className="dashboard-item">History</div>
                            <div className="dashboard-item">Trending</div>
                        </div>
                    </div>
                </div>
            </div>
        )

}

export default UserHome;