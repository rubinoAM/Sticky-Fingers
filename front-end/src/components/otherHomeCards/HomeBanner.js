import React, { Component } from 'react';
import '../pages/userHome.css';

class HomeBanner extends Component{
    constructor(){
        super()
        this.state = {
            userName:'',
            avatarUrl:'placeholder.jpg',
            tagline:'',
        }
    }

    componentWillReceiveProps(newProps){
        //console.log(newProps);
        this.setState({
            userName:newProps.data[0].userName,
            avatarUrl:newProps.data[0].avatarUrl,
            tagline:newProps.data[0].tagline,
        })
    }

    render(){
        const userNameOnBanner = this.state.userName;
        let allUpperUserNameOnBanner = userNameOnBanner.toUpperCase();
        //console.log(this.props);
        const userAvatar = `${window.apiHost}/images/${this.state.avatarUrl}`;
        const userTagline = this.state.tagline;

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

export default HomeBanner;



