import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer(){
    let currTime = new Date();
    let currYear = currTime.getFullYear();

    return(
        <div className="page-footer footer" id="footer">
            <div className="container">
                <div className="row">
                    <div className="col m4 s12">
                        <h5>Sticky Fingers</h5>
                        <ul>
                            <li><Link to="/users/aboutUs">About Us</Link></li>
                            <li><Link to="">Blog</Link></li>
                            <li><Link to="">Careers</Link></li>
                        </ul>
                    </div>
                    <div className="col m4 s12">
                        <h5>Help</h5>
                        <ul>
                            <li><Link to="">Help & Support</Link></li>
                            <li><Link to="">Forum</Link></li>
                            <li><Link to="">FAQ</Link></li>
                        </ul>
                    </div>
                    <div className="col m4 s12">
                        <h5>Follow Us</h5>
                        <ul>
                            <li><Link to="">Facebook</Link></li>
                            <li><Link to="">Twitter</Link></li>
                            <li><Link to="">Soundcloud</Link></li>
                            <li><Link to="">Instagram</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright">© {currYear} JR Priestman & Michael Rubino</div>
            </div>
        </div>
    )
}

export default Footer;