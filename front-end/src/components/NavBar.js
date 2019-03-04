import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends Component{
    constructor(){
        super()
        this.state = {
            loggedIn:false
        }
    }

    render(){
        let currentNav;
        if(this.state.loggedIn === false){
            currentNav = <ul className="navs">
                            <li><Link to="/register">REGISTER</Link></li>
                            <li><Link to="/login">LOGIN</Link></li>
                        </ul>;
        } else {
            currentNav = <ul className="navs">
                            <li><Link to="/register">LINK 1</Link></li>
                            <li><Link to="/register">LINK 2</Link></li>
                            <li><Link to="/register">LINK 3</Link></li>
                            <li><Link to="/logout">LOGOUT</Link></li>
                        </ul>;
        }

        return(
            <div>
                <div className="nav-bar hide-on-small-only">
                    <Link to="/"><img src="images/stickyfingerslogo_sm.png" alt="" /></Link>
                    {currentNav}
                </div>
                <div className="nav-bar-mobile hide-on-med-and-up">
                    <img src="images/stickyfingerslogo_sm.png" alt="" />
                    <i className="material-icons">menu</i>
                </div>
            </div>
        )
    }
}

export default NavBar;