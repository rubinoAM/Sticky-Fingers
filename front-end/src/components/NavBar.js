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
        return(
            <div>
                <div class="nav-bar hide-on-small-only">
                    <img src="images/stickyfingerslogo_sm.png" alt="" />
                    <ul class="navs">
                        <li><Link to="/register">REGISTER</Link></li>
                        <li><Link to="/login">LOG-IN</Link></li>
                    </ul>
                </div>
                <div class="nav-bar-mobile hide-on-med-and-up">
                    <img src="images/stickyfingerslogo_sm.png" alt="" />
                    <i className="material-icons">menu</i>
                </div>
            </div>
        )
    }
}

export default NavBar;