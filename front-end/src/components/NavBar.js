import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import authAction from '../actions/authAction';

class NavBar extends Component{
    componentDidMount(){
        let mobileNavBar = document.getElementById('mobile-navs');
        mobileNavBar.style.display = 'none';
        mobileNavBar.style.opacity = '0';
    }

    componentWillReceiveProps(newProps){
        let mobileNavBar = document.getElementById('mobile-navs');
        mobileNavBar.style.display = 'none';
        mobileNavBar.style.opacity = '0';
    }

    showMobile = (e)=>{
        e.preventDefault();
        let mobileNavBar = document.getElementById('mobile-navs');
        if(mobileNavBar.style.display === 'none'){
            mobileNavBar.style.display = 'block';
            setTimeout(()=>{
                mobileNavBar.style.opacity = '100';
            },50)
        } else {
            mobileNavBar.style.display = 'none';
            mobileNavBar.style.opacity = '0';
        }
    }

    logOut = (e)=>{
        e.preventDefault();
        this.props.authAction({
            email:'',
            msg:'',
            username:'',
            token:'',
        })
        this.props.history.push('/');
    }

    render(){
        let currentNav;
        let currentMobileNav;
        if(!this.props.auth.userName){
            currentNav = <ul className="navs">
                            <li><Link to="/register">REGISTER</Link></li>
                            <li><Link to="/login">LOGIN</Link></li>
                        </ul>;

            currentMobileNav = <ul className="mobile-navs" id="mobile-navs">
                                <li><Link to="/register">REGISTER</Link></li>
                                <li><Link to="/login">LOGIN</Link></li>
                            </ul>;
        } else {
            currentNav = <ul className="navs">
                            <li><Link to="/users/userHome">HOME</Link></li>
                            <li><Link to="/users/collection">COLLECTION</Link></li>
                            <li><Link to="/users/friends">FRIENDS</Link></li>
                            <li><Link to="/users/community">COMMUNITY</Link></li>
                            <li><a className="logout-link" onClick={this.logOut}>LOGOUT</a></li>
                        </ul>;

            currentMobileNav = <ul className="mobile-navs" id="mobile-navs">
                                    <li><Link to="/users/userHome">HOME</Link></li>
                                    <li><Link to="/users/collection">COLLECTION</Link></li>
                                    <li><Link to="/users/friends">FRIENDS</Link></li>
                                    <li><Link to="/users/community">COMMUNITY</Link></li>
                                    <li><a onClick={this.logOut}>LOGOUT</a></li>
                                </ul>;
        }

        return(
            <div>
                <div className="nav-bar hide-on-small-only">
                    <Link className="image-link" to="/"><img src="/images/stickyfingerslogo_sm.png" alt="" className="nav-logo" /></Link>
                    {currentNav}
                </div>
                <div className="nav-bar-mobile hide-on-med-and-up">
                    <img src="/images/stickyfingerslogo_sm.png" alt="" className="nav-logo" />
                    <button onClick={this.showMobile} className="menu-btn"><i className="material-icons">menu</i></button>
                    {currentMobileNav}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth:state.auth,
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        authAction,
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);