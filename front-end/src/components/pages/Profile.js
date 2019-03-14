import React, { Component } from 'react';
import './profile.css';
import formHeaderImage from '../../images/form-header.jpg';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import avatarAction from '../../actions/avatarAction';

class Profile extends Component{
    constructor(){
        super()
        this.state = {
            msg: "",
            showAlert: false,
        }
    }

    finishRegister = (e)=>{
        e.preventDefault();
        //console.log(e.target);

        //console.dir(e.target.avatar);

        const avatar = e.target.avatar.files[0];
        //console.log(avatar);
        const tagline = e.target.tagline.value;
        const addStreet = e.target.addStreet.value;
        const addCity = e.target.addCity.value;
        const addState = e.target.addState.value;
        const addZip = e.target.addZip.value;
        //console.log(avatar,tagline,addStreet,addCity,addState,addZip);

        const registerData = {
            tagline,
            addStreet,
            addCity,
            addState,
            addZip,
        }

        const config = {
            headers: {
                'content-type':'multipart/form-data',
            }
        }

        const formData = new FormData();
        formData.append('avatar',avatar);
        // formData.append('avatar',this.props.auth.avatar);
        formData.append('token',this.props.auth.token);
        formData.append('userName',this.props.auth.userName)

        const axiosPromise = axios.post(
            `${window.apiHost}/users/profileAvatar`,
            formData,
            config);

        axios({
            url: `${window.apiHost}/users/profileCreation`,
            method: 'POST',
            data: {
                registerData,
                token:this.props.auth.token,
                userName:this.props.auth.userName,
            },
        }).then((response)=>{
            console.log(response.data)
            let avyPath = response.data;
            this.props.avatarAction(avyPath);
            this.props.history.push('/users/userHome');
        }).catch((err)=>{if (err){throw err}});
    }

    render(){
        //console.log(this.props);

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
                                <input className="validate" type="file" name="avatar" id="avatar" required/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <input className='validate' type='text' name='tagline' id='tagline' required/>
                                <label htmlFor='tagline'>Enter Your Personal Tagline</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className='input-field col s12'>
                                <input className='validate' type='text' name='addStreet' id='addStreet' required/>
                                <label htmlFor='addStreet'>Enter Your Bldg. Number and Street</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className='input-field col s12'>
                                <input className='validate' type='text' name='addCity' id='addCity' required/>
                                <label htmlFor='addCity'>Enter Your City</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className='input-field col s12'>
                                <input className='validate' type='text' name='addState' id='addState' required/>
                                <label htmlFor='addState'>Enter Your State</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className='input-field col s12'>
                                <input className='validate' type='text' name='addZip' id='addZip' required/>
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

function mapStateToProps(state){
    return{
        auth:state.auth,
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        avatarAction,
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);