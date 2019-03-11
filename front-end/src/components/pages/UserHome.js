import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeBanner from '../userHomeCards/HomeBanner';
import HomeNavPanel from '../userHomeCards/HomeNavPanel';
import HomeCollection from '../userHomeCards/HomeCollection';
import HomeFriends from '../userHomeCards/HomeFriends';
import HomeTrades from '../userHomeCards/HomeTrades';
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
                            <HomeTrades /> 
                            {/* <HomeTrending /> */}
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