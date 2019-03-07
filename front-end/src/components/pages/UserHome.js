import React from 'react';
import './userHome.css';

function UserHome(){


        return(
            
            <div className="user-home-container">
                <div className="container">
                    <div className="home-header row">
                        <div className="headshot-div col s12 m5">
                            <img src="https://placehold.it/200x200" className="headshot" alt="" />
                        </div>
                        <div className="banner col s12 m7">
                            <h2>USER NAME</h2>
                            <p>Personalized Tag Line</p>
                            <p>Member since</p>
                        </div>
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
                            <div className="dashboard-item row">
                                <div className="col s12 m3">
                                    <span className="dashboard-item-label">Collection</span>
                                    <span className="dashboard-subinfo"> sub info sub info sub info sub info sub info sub info</span>
                                </div>
                                
                                <div className="dashboard-item-content col s12 m9 ">
                                    <div className="row">
                                        <span className="dashboard-item-details col s12">details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this </span>
                                    </div>
                                    <div className="row">
                                    <span className="col s9"></span>
                                        <span className="dashboard-item-link pin-bottom col s3 offset-s8" ><a href="#" className="dashboard-item-link-tag">Collection</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-item row">
                                <div className="col s12 m3">
                                    <span className="dashboard-item-label">Friends</span>
                                    <span className="dashboard-subinfo"> sub info sub info sub info sub info sub info sub info</span>
                                </div>
                                
                                <div className="dashboard-item-content col s12 m9 ">
                                    <div className="row">
                                        <span className="dashboard-item-details col s12">details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this </span>
                                    </div>
                                    <div className="row">
                                    <span className="col s9"></span>
                                        <span className="dashboard-item-link pin-bottom col s3 offset-s8" ><a href="#" className="dashboard-item-link-tag">Collection</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-item row">
                                <div className="col s12 m3">
                                    <span className="dashboard-item-label">Trades</span>
                                    <span className="dashboard-subinfo"> sub info sub info sub info sub info sub info sub info</span>
                                </div>
                                
                                <div className="dashboard-item-content col s12 m9 ">
                                    <div className="row">
                                        <span className="dashboard-item-details col s12">details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this </span>
                                    </div>
                                    <div className="row">
                                    <span className="col s9"></span>
                                        <span className="dashboard-item-link pin-bottom col s3 offset-s8" ><a href="#" className="dashboard-item-link-tag">Collection</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-item row">
                                <div className="col s12 m3">
                                    <span className="dashboard-item-label">History</span>
                                    <span className="dashboard-subinfo"> sub info sub info sub info sub info sub info sub info</span>
                                </div>
                                
                                <div className="dashboard-item-content col s12 m9 ">
                                    <div className="row">
                                        <span className="dashboard-item-details col s12">details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this </span>
                                    </div>
                                    <div className="row">
                                    <span className="col s9"></span>
                                        <span className="dashboard-item-link pin-bottom col s3 offset-s8" ><a href="#" className="dashboard-item-link-tag">Collection</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-item row">
                                <div className="col s12 m3">
                                    <span className="dashboard-item-label">Trending</span>
                                    <span className="dashboard-subinfo"> sub info sub info sub info sub info sub info sub info</span>
                                </div>
                                
                                <div className="dashboard-item-content col s12 m9 ">
                                    <div className="row">
                                        <span className="dashboard-item-details col s12">details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this details about this </span>
                                    </div>
                                    <div className="row">
                                    <span className="col s9"></span>
                                        <span className="dashboard-item-link pin-bottom col s3 offset-s8" ><a href="#" className="dashboard-item-link-tag">Collection</a></span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="dashboard-item"></div> 
                            <div className="dashboard-item"></div>
                            <div className="dashboard-item"></div>
                            <div className="dashboard-item"></div>
                        </div>
                    </div>
                </div>
            </div>
        )

}

export default UserHome;