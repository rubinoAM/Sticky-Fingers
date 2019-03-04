import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loginAction from '../../actions/loginAction';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

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
        return(
            <main>

                <SweetAlert
                    show={this.state.showAlert}
                    title="Login Error"
                    text={this.state.msg}
                    onConfirm={() => this.setState({ showAlert: false })}
                />
                <center>
                <div className="App">
                        <header className="App-header">
                <div className="container">
                    <div className="z-depth-1 grey lighten-4 row login">
                    <form className="col s12" onSubmit={this.handleLogin}>
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
                            <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Login</button>
                        </div>
                        </center>
                    </form>
                    </div>
                </div>
                <Link to="/register">Create account</Link>
                </header>
                </div>
                </center>
                <div className="section"></div>
                <div className="section"></div> 
            </main>
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