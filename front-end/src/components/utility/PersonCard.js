import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PersonCard extends Component{
    constructor(){
        super()

    }

    componentDidMount(){

    }

    render(){
        //console.log(this.state.friend);
        // let avatar = this.state.person.avatarUrl;
        // if(avatar === "null"){
        //     avatar = 'https://via.placeholder.com/200'
        // }

        return(
            <div className="col s12 m6 l3">Person Card
                {/* <div className="card friend-card">
                    <div className="card-image">
                        <Link to="/"><img src={this.state.person.avatarUrl} className="friend-avatar" alt="" /></Link>
                    </div>
                    <div className="card-content">
                        <span className="friend-username">{this.state.person.userName}</span>
                        <div className="row friend-details">
                            <div className="col s12">
                                <div className="friend-since">
                                    <p>Member Since:</p>
                                    <p>{this.state.person.friendSince}</p>
                                </div>
                                <div className="total-exchanges">
                                    <p>Total Exchanges:</p>
                                    <p>{this.state.person.exchanges}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                    <center>
                        <Link to="/"><button className="btn friend-btn">PROFILE</button></Link>
                    </center>
                    </div>
                </div> */}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        community: state.community
    }
}

export default connect(mapStateToProps)(PersonCard);