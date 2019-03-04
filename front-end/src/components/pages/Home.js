import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home(){

    return(
        <div className="home-container">
            <p>Sticky Fingers App Insanity Check</p>
            <Link to="/register" >Register</Link>
            or
            <Link to="/login" >Login</Link>
        </div>
    )
}

export default Home;