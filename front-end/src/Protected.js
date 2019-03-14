import React, { Component } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//Routes
import UserHome from './components/pages/UserHome';
import Collection from './components/pages/Collection';
import Trades from './components/pages/Trades';
import Community from './components/pages/Community';
import Friends from './components/pages/Friends';
import Record from './components/pages/Record';
import MakeTrade from './components/pages/MakeTrade';
import Profile from './components/pages/Profile';
import AddRecord from './components/pages/AddRecord';
import OtherUser from './components/pages/OtherUser';

class Protected extends Component{
    render(){
        //console.log(this.props.auth);
        if(this.props.location !== '/' || this.props.location !== '/register'  || this.props.location !== '/login' || this.props.location !== '/aboutUs'){
            if(this.props.auth.length === 0){
                return(<Redirect to='/' />)
            } else {
                return(
                    <div>
                        <Route exact path="/users/userHome" component={UserHome} />
                        <Route exact path="/users/collection" component={Collection} />
                        <Route exact path="/users/trades" component={Trades} />
                        <Route exact path="/users/community" component={Community} />
                        <Route exact path="/users/friends" component={Friends} />
                        <Route exact path="/users/record/:id" component={Record} />
                        <Route exact path="/users/makeTrade" component={MakeTrade} />
                        <Route exact path="/users/profile" component={Profile} />
                        <Route exact path="/users/addRecord" component={AddRecord} />
                        <Route exact path="/users/people/:id" component={OtherUser} />
                    </div>
                )
            }
        }
    }
}

function mapStateToProps(state){
    return{
        auth:state.auth,
    }
}

export default connect(mapStateToProps)(Protected);