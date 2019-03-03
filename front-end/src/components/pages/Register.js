import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import authAction from '../../actions/authAction';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

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
            this.props.history.push('/');
        }
    }

    registerSubmit = (event)=>{
        event.preventDefault();
        // console.dir(event.target);
        // below two are exactly the same
        // const userName = event.target[0].value;
        const email = document.getElementById('email').value;
        const password = event.target[1].value;
        // console.log(username);
        // console.log(password);
        this.props.authAction({
            email, password
        })

    }

    render(){
        // const msg = this.state.msg;
        return(
            <main>
                <SweetAlert
                    show={this.state.showAlert}
                    title="Registration Error"
                    text="Email is already registered. Login or chooose a different email."
                    onConfirm={() => this.setState({ showAlert: false })}
                />
                <center>
                <div className="container">
                    <div className="z-depth-1 grey lighten-4 row login">
                    <form className="col s12" onSubmit={this.registerSubmit}>
                        <div className='row'>
                        <div className='col s12'>
                        </div>
                        </div>
                        <div className='row'>
                        <div className='input-field col s12'>
                            <input className='validate' type='email' name='email' id='email' />
                            <label htmlFor='email'>Enter your email</label>
                        </div>
                        </div>
                        <div className='row'>
                        <div className='input-field col s12'>
                            <input className='validate' type='password' name='password' id='password' />
                            <label htmlFor='password'>Enter your password</label>
                        </div>
                        <label>
                            <a className='pink-text' href='#!'><b>Forgot Password?</b></a>
                        </label>
                        </div>
                        <br />
                        <center>
                        <div className='row'>
                            <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Register</button>
                        </div>
                        </center>
                    </form>
                    </div>
                </div>
                </center>
                <div className="section"></div>
                <div className="section"></div> 
            </main>
        )

    }

    
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

// auth = this.props.auth

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        authAction: authAction
    },dispatcher)
}

// authAction = this.props.authAction

export default connect(mapStateToProps,mapDispatchToProps)(Register)