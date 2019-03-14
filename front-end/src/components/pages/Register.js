import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import authAction from '../../actions/authAction';
import communityAction from '../../actions/communityAction';
import collectionAction from '../../actions/collectionAction';
import friendsAction from '../../actions/friendsAction';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import './form.css';
import formHeaderImage from '../../images/form-header.jpg';

class Register extends Component{
    constructor(){
        super()
        this.state = {
            msg: "",
            showAlert: false,
        }
    }

    componentWillReceiveProps(newProps){
        console.log(newProps);
        if(newProps.auth.msg === "User Exists"){
            this.setState({
                showAlert: true
            })
        }else if(newProps.auth.msg === 'User Added'){ 
            this.props.communityAction(newProps.auth);
            this.props.collectionAction(newProps.auth);
            this.props.friendsAction(newProps.auth);
            this.props.history.push('/users/profile');
        }
    }

    registerSubmit = (event)=>{
        event.preventDefault();
        // console.dir(event.target);
        const userName = event.target[0].value;
        const email = document.getElementById('email').value;
        const password = event.target[2].value;
        console.log(userName);
        console.log(email);
        console.log(password);
        console.dir(event.target)
        this.props.authAction({
            userName,
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
                    title="Register Error"
                    text={this.state.msg}
                    onConfirm={() => this.setState({ showAlert: false })}
                />
                <div className="col s12 m6 form-header" style={headerStyle}>
                    <h1>REGISTER</h1>
                    <span>Please enter your information in order to register an account with us.</span>
                </div>
                <center className="col s12 m6">
                    <div className="container form-body">
                    <form className="form-main-form" onSubmit={this.registerSubmit}>
                            <div className="row">
                                <div className='input-field col s12'>
                                    <input className='validate' type='text' name='username' id='username' autoComplete="on"/>
                                    <label htmlFor='username'>Enter Your Username</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input className='validate' type='email' name='email' id='email' autoComplete="on"/>
                                    <label htmlFor='email'>Enter Your Email Address</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input className='validate' type='password' name='password' id='password' autoComplete="on"/>
                                    <label htmlFor='password'>Enter Your Password</label>
                                </div>
                            </div>
                            <center>
                                <div className='row'>
                                    <span className="col s2 m3"></span>
                                    <button type='submit' name='btn_register' className='col s8 m6 form-btn btn btn-large waves-effect'>Register</button>
                                    <span className="col s2 m3"></span>
                                </div>
                            </center>
                        </form>
                    </div>
                </center>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        authAction: authAction,
        communityAction,
        collectionAction,
        friendsAction
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);