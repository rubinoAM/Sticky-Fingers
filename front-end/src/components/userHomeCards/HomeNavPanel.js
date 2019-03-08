import React from 'react';
import '../pages/userHome.css';

function HomeNavPanel(){

    return(

        <div className="navPanel col s12 m3">
            <div className="row">
                <ul className="navOptions col s12">
                    <li className="navOption"><a href="#collection">Collection</a></li>
                    <li className="navOption"><a href="#friends">Friends</a></li>
                    <li className="navOption"><a href="#trades">Trades</a></li>
                    <li className="navOption"><a href="#trending">Trending</a></li>
                    <li className="navOption"><a href="#preferences">Preferences</a></li>
                </ul>
            </div>
        </div>

    )
}

export default HomeNavPanel;