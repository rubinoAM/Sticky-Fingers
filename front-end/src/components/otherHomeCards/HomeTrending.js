import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../pages/userHome.css';

class HomeTrending extends Component{
    constructor(){
        super()
    }

    render(){
        return(
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
                        <span className="dashboard-item-link pin-bottom col s3 offset-s8" ><a href="#">Trending</a></span>
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

export default connect(mapStateToProps)(HomeTrending);


