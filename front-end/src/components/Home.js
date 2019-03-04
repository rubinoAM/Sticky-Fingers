import React from 'react';
import { Link } from 'react-router-dom';

function Home(){

    return(
        <p>
            <div className="App">
                <header className="App-header">
                <p>
                Sticky Fingers App Insanity Check
                </p>
                <Link to="/register" >Register</Link>
                or
                <Link to="/login" >Login</Link>
                </header>
            </div>
            
        </p>
    )
}

export default Home;