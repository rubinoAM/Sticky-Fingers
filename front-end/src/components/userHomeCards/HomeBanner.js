import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import authAction from '../../actions/authAction';
import avatarAction from '../../actions/avatarAction';
import '../pages/userHome.css';

class HomeBanner extends Component{
    render(){
        const userNameOnBanner = this.props.auth.userName;
        let allUpperUserNameOnBanner = userNameOnBanner.toUpperCase();
        //console.log(this.props);
        const userAvatar = `${window.apiHost}/images/${this.props.auth.avatarUrl}`;
        const userTagline = this.props.auth.tagline;

        return(
            <div className="container">
                <div className="home-header row">
                    <div className="hide-on-med-and-up">
                        <div className="col s12 banner">
                            <img src={userAvatar} className="headshot" alt="" />
                        </div>
                        <div className=" col s12 banner-contents">
                            <h2>{allUpperUserNameOnBanner}</h2>
                            <p>{userTagline}</p>
                        </div>
                    </div>
                    <div className="col m12 hide-on-small-only">
                        <div className="banner">
                            <img src={userAvatar} className="headshot" alt="" />
                        </div>
                            <div className="banner-contents">
                                <h2>{allUpperUserNameOnBanner}</h2>
                                <p>{userTagline}</p>
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
        //avatarUrl: state.avatarUrl,
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        authAction,
        avatarAction
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeBanner);