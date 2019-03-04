import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Slider from 'react-slick';

function Home(){

    return(
        <div className="home-container">
            <div className="landing-img-container">
                <h1>BECAUSE MUSIC SOUNDS BETTER WITH YOU</h1>
                <img src="../../../../images/landing_bg.png"/>
            </div>
            <div className="landing-content">
                <div class="row box">
                    <div class="col s12">
                        <div class="row">
                            <div class="content-header">
                                <span>WHAT IS STICKY FINGERS?</span>
                            </div>
                            <span class="col s8"></span>
                        </div>
                        <div class="row">
                            <div class="col s12 m6">
                                <p>Nam sit amet porta ipsum. Nunc sagittis elit enim. Donec odio lorem, porta ac imperdiet in, vehicula sit amet neque. Aliquam id ipsum laoreet, faucibus enim eget, ultrices massa. Maecenas ut semper ipsum, a volutpat magna. Praesent placerat lorem et magna porta, sit amet mattis sapien luctus. Fusce varius dolor at egestas pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam accumsan nisi eget ipsum egestas, id dapibus ipsum fermentum. Sed vel velit justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam vel elit eget metus lobortis ullamcorper nec non sapien. In hendrerit ut lacus quis luctus.</p>
                            </div>
                            <div class="col s12 m6">
                                <p>Nam sit amet porta ipsum. Nunc sagittis elit enim. Donec odio lorem, porta ac imperdiet in, vehicula sit amet neque. Aliquam id ipsum laoreet, faucibus enim eget, ultrices massa. Maecenas ut semper ipsum, a volutpat magna. Praesent placerat lorem et magna porta, sit amet mattis sapien luctus. Fusce varius dolor at egestas pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam accumsan nisi eget ipsum egestas, id dapibus ipsum fermentum. Sed vel velit justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam vel elit eget metus lobortis ullamcorper nec non sapien. In hendrerit ut lacus quis luctus.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row box">
                    <div class="col s12">
                        <div class="row">
                            <div class="content-header">
                                <span>WHY USE STICKY FINGERS?</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12 m6">
                                <p>Nam sit amet porta ipsum. Nunc sagittis elit enim. Donec odio lorem, porta ac imperdiet in, vehicula sit amet neque. Aliquam id ipsum laoreet, faucibus enim eget, ultrices massa. Maecenas ut semper ipsum, a volutpat magna. Praesent placerat lorem et magna porta, sit amet mattis sapien luctus. Fusce varius dolor at egestas pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam accumsan nisi eget ipsum egestas, id dapibus ipsum fermentum. Sed vel velit justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam vel elit eget metus lobortis ullamcorper nec non sapien. In hendrerit ut lacus quis luctus.</p>
                            </div>
                            <div class="col s12 m6">
                                <p>Nam sit amet porta ipsum. Nunc sagittis elit enim. Donec odio lorem, porta ac imperdiet in, vehicula sit amet neque. Aliquam id ipsum laoreet, faucibus enim eget, ultrices massa. Maecenas ut semper ipsum, a volutpat magna. Praesent placerat lorem et magna porta, sit amet mattis sapien luctus. Fusce varius dolor at egestas pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam accumsan nisi eget ipsum egestas, id dapibus ipsum fermentum. Sed vel velit justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam vel elit eget metus lobortis ullamcorper nec non sapien. In hendrerit ut lacus quis luctus.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row box">
                    <div class="col s12">
                        <div class="row">
                            <div class="content-header">
                                <span>HOW CAN I JOIN?</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12 m6">
                                <p>Nam sit amet porta ipsum. Nunc sagittis elit enim. Donec odio lorem, porta ac imperdiet in, vehicula sit amet neque. Aliquam id ipsum laoreet, faucibus enim eget, ultrices massa. Maecenas ut semper ipsum, a volutpat magna. Praesent placerat lorem et magna porta, sit amet mattis sapien luctus. Fusce varius dolor at egestas pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam accumsan nisi eget ipsum egestas, id dapibus ipsum fermentum. Sed vel velit justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam vel elit eget metus lobortis ullamcorper nec non sapien. In hendrerit ut lacus quis luctus.</p>
                            </div>
                            <div class="col s12 m6">
                                <p>Nam sit amet porta ipsum. Nunc sagittis elit enim. Donec odio lorem, porta ac imperdiet in, vehicula sit amet neque. Aliquam id ipsum laoreet, faucibus enim eget, ultrices massa. Maecenas ut semper ipsum, a volutpat magna. Praesent placerat lorem et magna porta, sit amet mattis sapien luctus. Fusce varius dolor at egestas pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam accumsan nisi eget ipsum egestas, id dapibus ipsum fermentum. Sed vel velit justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam vel elit eget metus lobortis ullamcorper nec non sapien. In hendrerit ut lacus quis luctus.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <p>Sticky Fingers App Insanity Check</p>
                <Link to="/register" >Register</Link>
                <p>or</p>
                <Link to="/login" >Login</Link> */}
            </div>
        </div>
    )
}

export default Home;