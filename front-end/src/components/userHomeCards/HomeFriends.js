import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import friendsAction from '../../actions/friendsAction';
import '../pages/userHome.css';

class HomeFriends extends Component{
    constructor(){
        super()
    }

    // componentDidMount(){
    //     this.props.friendsAction();
    // }

    render(){
        console.log(this.props)
        // if(this.props.friends.length === 0){
        //     return (<h1>Loading...</h1>)
        // }else{
            
            
            const friendsList = this.props.friends.map((friend,i)=>{
                let avatar = this.props.friends[i].avatarUrl;
                console.log(this.props)
                if(!avatar){
                    avatar = 'placeholder.png'
                }
                let avatarUrl = `${window.apiHost}/images/${avatar}`;
                console.log(avatarUrl)
                // let profileUrl = `/users/people/${this.state.friend.id}`;
                return(
                    <li key={i}>
                        <img src={avatarUrl} alt="" className="mini-friend-pic"/> {friend.userName} 
                    </li>
                )
            })
            return(
                <div className="dashboard-item row">
                    <div className="col s12 m4">
                        <span className="dashboard-item-label" id="friends">Friends</span>
                    </div>
                    <div className="dashboard-item-content col s12">
                        <div className="row">
                            <div className="col s12 m3">
                                <div className="dashboard-item-detail-label">Newest Friends:</div>
                            </div>
                            <div className="dashboard-item-details col s12 m9">
                                <ul>
                                    {friendsList}
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                        <span className="col s9"></span>
                            <span className="dashboard-item-link pin-bottom col s3 offset-s8" ><Link to="/users/friends">Friends</Link></span>
                        </div>
                    </div>
                </div>

            )
        
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth,
        friends: state.friends
    }
}

// function mapDispatchToProps(dispatcher){
//     return bindActionCreators({
//         friendsAction
//     },dispatcher)
// }

export default connect(mapStateToProps)(HomeFriends);