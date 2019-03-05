import React, { Component } from 'react';

class Friend extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="col s12 m6 l3">
                <div className="card friend-card">
                    <div className="card-image">
                        <img src="https://via.placeholder.com/200" alt="" />
                    </div>
                    <div className="card-content">
                        <span className="friend-username">USERNAME</span>
                        <div className="row friend-details">
                            <div className="col s12">
                                <div className="friend-since">
                                    <p>Friend Since:</p>
                                    <p> XX-XX-XXXX</p>
                                </div>
                                <div className="total-exchanges">
                                    <p>Total Exchanges:</p>
                                    <p> XXX</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                    <center>
                        <button className="btn friend-btn offset-s2">PROFILE</button></center>
                    </div>
                </div>
            </div>
        )
    }
}

export default Friend;