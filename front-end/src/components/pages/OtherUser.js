import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeBanner from '../otherHomeCards/HomeBanner';
import HomeNavPanel from '../otherHomeCards/HomeNavPanel';
import HomeCollection from '../otherHomeCards/HomeCollection';
import HomeFriends from '../otherHomeCards/HomeFriends';
import HomeTrades from '../otherHomeCards/HomeTrades';
// import HomeTrending from '../otherHomeCards/HomeTrending';
import './userHome.css';


class OtherUser extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="user-home-container">
                <HomeBanner />
                <div className="home-body container">
                    <div className="row">
                        <div className="dashboard col s12 m9 offset-m3">
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

export default connect(mapStateToProps)(OtherUser);