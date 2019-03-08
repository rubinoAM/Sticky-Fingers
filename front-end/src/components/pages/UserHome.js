import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeBanner from '../userHomeCards/HomeBanner';
import HomeNavPanel from '../userHomeCards/HomeNavPanel';
import HomeCollection from '../userHomeCards/HomeCollection';
import HomeFriends from '../userHomeCards/HomeFriends';
// import HomeTrades from '../userHomeCards/HomeTrades';
// import HomeTrending from '../userHomeCards/HomeTrending';
import './userHome.css';


class UserHome extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            
            <div className="user-home-container">

                <HomeBanner />

                <div className="home-body container">
                    <div className="row">

                        <HomeNavPanel />

                        <div className="dashboard col s12 m9">

                            <HomeCollection />

                            <HomeFriends />

                            <div className="dashboard-item row">
                                <div className="col s12 m3">
                                    <span className="dashboard-item-label" id="trades">Trades</span>
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
                                    <span className="dashboard-item-label" id="trending">Trending</span>
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


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth,
        coll: state.coll,
        friends: state.friends,
        addRec: state.addRec
    }
}

export default connect(mapStateToProps)(UserHome);