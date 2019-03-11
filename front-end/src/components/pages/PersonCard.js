import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import communityAction from '../../actions/communityAction';
import friendsAction from '../../actions/friendsAction';


class PersonCard extends Component{
    constructor(){
        super()
        this.state = {
            friend:{},
        }
    }

    addFriend = ()=>{
        // (this.state.friend.userName)
        // console.log(this.state.friend.userName)
        const newFriend = this.state;
        // axios request to add this person to the friend group
        // then run the friends action
        // then run the community action
        // re-route to the friends page
        
        const addFriendPromise = axios.post(`${window.apiHost}/users/addFriend`, newFriend);
        addFriendPromise.then(()=>{
            this.props.friendsAction(this.props.auth);
            this.props.communityAction(this.props.auth);

        })

    } 
    

    // this.state.friend changed to this.props.community

    componentDidMount(){
        this.setState({
            friend:this.props.data,
        })
    }

    

    render(){
        // console.log(this.props);
        let avatar = this.state.friend.avatarUrl;
        // let avatar = this.props.community[1].avatarUrl;
        if(avatar === "null"){
            avatar = 'https://via.placeholder.com/200'
        }

        return(
            <div className="col s12 m6 l3">
                <div className="card friend-card">
                    <div className="card-image">
                        <Link to="/"><img src={this.state.friend.avatarUrl} className="friend-avatar" alt="" /></Link>
                    </div>
                    <div className="card-content">
                        <span className="friend-username">{this.state.friend.userName}</span>
                        <div className="row friend-details">
                            <div className="col s12">
                                <div className="friend-since">
                                    <p>Member Since:</p>
                                    <p>{this.state.friend.friendSince}</p>
                                </div>
                                <div className="total-exchanges">
                                    <p>Total Exchanges:</p>
                                    <p>{this.state.friend.exchanges}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                    <center>
                        <Link to="/"><button className="btn friend-btn">PROFILE</button></Link>
                    </center>
                    </div>
                    <div className="card-action">
                    <center>
                        <button onClick={this.addFriend} className="btn friend-btn">ADD FRIEND</button>
                    </center>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        community: state.community,
        friends: state.friends
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        communityAction,
        friendsAction
    }, dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(PersonCard);

// add this person to your friends with a an axios request right in the component, THEN! have the friends action and community actions run to update state of these two on the front end. then re route the user to the Friends page