import React, { Component } from 'react';
import './profile.css';
import formHeaderImage from '../../images/form-header.jpg';
import axios from 'axios';

class Profile extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    finishRegister = (e)=>{
        e.preventDefault();
        console.log(e.target);

        const avatar = e.target.avatar.value;
        console.log(avatar);
    }

    render(){
        var profileStyle = {
            backgroundImage: `url(${formHeaderImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        };

        return(
            <div className="profile-page">
                <div className="profile-header" style={profileStyle}>
                    <h1>PROFILE</h1>
                    <span>Please enter the required information in order to complete your profile.</span>
                </div>
                <div className="profile-body">
                    <form className="profile-form" onSubmit={this.finishRegister}>
                        <div className="row">
                            <div className="input-field col s12">
                                <div className="avy-label">Avatar:</div>
                                <input className="validate" type="file" name="avatar" id="avatar" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <input className='validate' type='text' name='tagline' id='tagline' />
                                <label htmlFor='tagline'>Enter Your Personal Tagline</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className='input-field col s12'>
                                <input className='validate' type='text' name='addStreet' id='addStreet' />
                                <label htmlFor='addStreet'>Enter Your Bldg. Number and Street</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className='input-field col s12'>
                                <input className='validate' type='text' name='addCity' id='addCity' />
                                <label htmlFor='addCity'>Enter Your City</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className='input-field col s12'>
                                <input className='validate' type='text' name='addState' id='addState' />
                                <label htmlFor='addState'>Enter Your State</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className='input-field col s12'>
                                <input className='validate' type='text' name='addZip' id='addZip' />
                                <label htmlFor='addZip'>Enter Your Zip Code</label>
                            </div>
                        </div>
                        <center>
                            <div className='row'>
                                <button type='submit' name='btn_login' className='col s8 offset-s2 m6 offset-m3 form-btn btn btn-large waves-effect'>Finish</button>
                            </div>
                        </center>
                    </form>
                </div>
            </div>
        )
    }
}

export default Profile;