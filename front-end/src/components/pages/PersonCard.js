import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PersonCard extends Component{
    constructor(){
        super()
        this.state = {
            friend:{},
        }
    }

    // this.state.friend changed to this.props.community

    componentDidMount(){
        this.setState({
            friend:this.props.data,
        })
    }

    render(){
        //console.log(this.state.friend);
        let avatar = this.state.friend.avatarUrl;
        if(avatar === ""){
            avatar = 'placeholder.png'
        }

        let avatarUrl = `${window.apiHost}/images/${avatar}`;
        let profileUrl = `/users/people/${this.state.friend.id}`;

        return(
            <div className="col s12 m6 l3">
                <div className="card friend-card">
                    <div className="card-image">
                        <Link to={profileUrl}><img src={avatarUrl} className="friend-avatar" alt="" /></Link>
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
                        <Link to={profileUrl}><button className="btn friend-btn">PROFILE</button></Link>
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

export default connect(mapStateToProps)(PersonCard);