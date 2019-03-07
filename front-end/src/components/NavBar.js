import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { connect } from 'react-redux';

class NavBar extends Component{
    constructor(){
        super()
        this.state = {
            loggedIn:false,
        }
    }

    showMobile = (e)=>{
        e.preventDefault();
        let mobileNavBar = document.getElementById('mobile-navs');
        if(mobileNavBar.style.display === 'none'){
            mobileNavBar.style.display = 'block';
        } else {
            mobileNavBar.style.display = 'none';
        }
    }

    render(){
        let currentNav;
        let currentMobileNav;
        console.log(this.props);
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
                            <li><Link to="/users/addrecord">ADD RECORD</Link></li>
                            <li><Link to="/users/collection">COLLECTION</Link></li>
                            <li><Link to="/users/friends">FRIENDS</Link></li>
                            <li><Link to="/">LOGOUT</Link></li>
                        </ul>;

            currentMobileNav = <ul className="mobile-navs" id="mobile-navs">
                                    <li><Link to="/users/addrecord">ADD RECORD</Link></li>
                                    <li><Link to="/users/collection">COLLECTION</Link></li>
                                    <li><Link to="/users/friends">FRIENDS</Link></li>
                                    <li><Link to="/">LOGOUT</Link></li>
                                </ul>;
        }

        return(
            <div>
                <div className="nav-bar hide-on-small-only">
                    <Link to="/"><img src="/images/stickyfingerslogo_sm.png" alt="" /></Link>
                    {currentNav}
                </div>
                <div className="nav-bar-mobile hide-on-med-and-up">
                    <img src="/images/stickyfingerslogo_sm.png" alt="" />
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

export default connect(mapStateToProps)(NavBar);