import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loginAction from '../../actions/loginAction';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import './form.css';
import formHeaderImage from '../../images/form-header.jpg';

class Login extends Component{
    constructor(){
        super()
        this.state = {
            showAlert: false,
            msg: ""
        }
    }

    componentWillReceiveProps(newProps){
        console.log(newProps)
        if(newProps.auth.msg === "Bad Password"){
            this.setState({
                showAlert: true,
                msg: "Re-enter password"
            })
        }else if(newProps.auth.msg === "Bad User"){
            this.setState({
                showAlert: true,
                msg: "User name not found"
            })
        }else if(newProps.auth.msg === "Login Success"){
            this.props.history.push('/');
        }
    }

    componentDidMount(){

    }

    handleLogin = (event)=>{
        event.preventDefault()
        const email = event.target[0].value;
        const password = event.target[1].value;
        this.props.loginAction({
            email,
            password
        })
    }

    render(){
        var headerStyle = {
            backgroundImage: `url(${formHeaderImage})`,
            backgroundSize: 'cover',
        };

        return(
            <div className="row form-holder">
                <SweetAlert
                    show={this.state.showAlert}
                    title="Login Error"
                    text={this.state.msg}
                    onConfirm={() => this.setState({ showAlert: false })}
                />
                <div className="col s12 m6 form-header" style={headerStyle}>
                    <h1>LOG-IN</h1>
                    <span>Please enter your information in order to log into your account.</span>
                </div>
                <center className="col s12 m6">
                    <div className="container form-body">
                        <form className="form-main-form" onSubmit={this.handleLogin}>
                            <div className="row">
                                <div className='input-field col s12'>
                                    <input className='validate' type='text' name='username' id='username' />
                                    <label htmlFor='username'>Enter Your Username</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input className='validate' type='password' name='password' id='password' />
                                    <label htmlFor='password'>Enter Your Password</label>
                                </div>
                            </div>
                            <center>
                                <div className='row'>
                                    <span className="col s2 m3"></span>
                                    <button type='submit' name='btn_login' className='col s8 m6 form-btn btn btn-large waves-effect'>Login</button>
                                    <span className="col s2 m3"></span>
                                </div>
                                <div className="row">
                                    <Link className='form-tiny-input col s12' to="">Forgot Password?</Link>
                                    <Link className="form-tiny-input col s12" to="/register">Create Account</Link>
                                </div>
                            </center>
                        </form>
                    </div>
                </center>
            </div>
        )
    }
}

function MapStateToProps(state){
    return{
        auth: state.auth
    }
}

function MapDispatchToProps(dispatcher){
    return bindActionCreators({
        loginAction
    }, dispatcher)
}

export default connect(MapStateToProps, MapDispatchToProps)(Login)