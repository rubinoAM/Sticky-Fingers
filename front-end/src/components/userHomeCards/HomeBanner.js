import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import authAction from '../../actions/authAction';
import '../pages/userHome.css';



class HomeBanner extends Component{
    constructor(){
        super()
    }


    render(){
        const userNameOnBanner = this.props.auth.userName
        let allUpperUserNameOnBanner = userNameOnBanner.toUpperCase()
        return(
            <div className="container">
                <div className="home-header row">
                    <div className="headshot-div col s12 m5">
                        <img src="https://placehold.it/200x200" className="headshot" alt="" />
                    </div>
                    <div className="banner col s12 m7">
                        <h2>{allUpperUserNameOnBanner}</h2>
                        <p>Personalized Tag Line</p>
                        <p>Member since</p>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth,
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        authAction
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeBanner);



