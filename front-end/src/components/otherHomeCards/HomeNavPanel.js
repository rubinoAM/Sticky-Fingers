import React from 'react';
import '../pages/userHome.css';
import { Link } from 'react-router-dom';

function HomeNavPanel(){
    return(
        <div className="navPanel col s12 m3">
            <div className="row">
                <ul className="navOptions col s12">
                    <li className="navOption"><Link to="/users/addrecord">Add Record</Link></li>
                    <li className="navOption"><Link to="/users/makeTrade">Make Trade</Link></li>
                    <li className="navOption"><Link to="/users/profile">Profile</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default HomeNavPanel;