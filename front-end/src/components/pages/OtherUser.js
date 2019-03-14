import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import friendsInfoAction from '../../actions/friendsInfoAction';
import HomeBanner from '../otherHomeCards/HomeBanner';
import HomeCollection from '../otherHomeCards/HomeCollection';
import HomeFriends from '../otherHomeCards/HomeFriends';
import HomeTrades from '../otherHomeCards/HomeTrades';
import './userHome.css';


class OtherUser extends Component{

    componentDidMount(){
        let id = window.location.href
        id = id.charAt(id.length - 1)
        this.props.friendsInfoAction(id);
    }

    render(){
        // console.log(this.props.friendsInfo);
        let userDetails = this.props.friendsInfo.userDetails;
        let userRecords = this.props.friendsInfo.userRecords;
        let userFriends = this.props.friendsInfo.userFriends;
        let userTrades = this.props.friendsInfo.userTrades;

        return(
            <div className="user-home-container">
                <HomeBanner data={userDetails} />
                <div className="home-body container">
                    <div className="row">
                        <div className="dashboard col s12 m9 offset-m3">
                            <HomeCollection data={userRecords} />
                            <HomeFriends data={userFriends} />
                            <HomeTrades data={userTrades} /> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        friendsInfo: state.friendsInfo,
    }
}

function mapDispatcherToProps(dispatcher){
    return bindActionCreators({
        friendsInfoAction
    }, dispatcher)
}

export default connect(mapStateToProps,mapDispatcherToProps)(OtherUser);