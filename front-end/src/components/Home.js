import React from 'react';

function Home(){
    return(
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
    )
}

export default Home;