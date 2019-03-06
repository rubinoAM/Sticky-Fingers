import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//COMPONENTS
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//ROUTES
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import UserHome from './components/pages/UserHome';
import Collection from './components/pages/Collection';
import PastTrades from './components/pages/PastTrades';
import Marbles from './components/pages/Marbles.js';
import Community from './components/pages/Community';
import Friends from './components/pages/Friends';
import Record from './components/pages/Record';
import MakeTrade from './components/pages/MakeTrade';
import FriendProfile from './components/pages/FriendProfile';
import AddRecord from './components/pages/AddRecord';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <NavBar />
          <div className="main-app">
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/users/userHome" component={UserHome} />
            <Route exact path="/users/collection" component={Collection} />
            <Route exact path="/users/pastTrades" component={PastTrades} />
            <Route exact path="/users/marbles" component={Marbles} />
            <Route exact path="/users/community" component={Community} />
            <Route exact path="/users/friends" component={Friends} />
            <Route exact path="/users/record/:id" component={Record} />
            <Route exact path="/users/makeTrade" component={MakeTrade} />
            <Route exact path="/users/friendProfile" component={FriendProfile} />
            <Route exact path="/users/addRecord" component={AddRecord} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
