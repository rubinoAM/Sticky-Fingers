import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import UserHome from './components/pages/UserHome';
import Collection from './components/pages/Collection';
import PastTrades from './components/pages/PastTrades';
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
        <div className="App">
          <header className="App-header">
            <p>
              Sticky Fingers App Insanity Check
            </p>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/userHome" component={UserHome} />
            <Route exact path="/collection" component={Collection} />
            <Route exact path="/pastTrades" component={PastTrades} />
            <Route exact path="/community" component={Community} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/record" component={Record} />
            <Route exact path="/makeTrade" component={MakeTrade} />
            <Route exact path="/friendProfile" component={FriendProfile} />
            <Route exact path="/addRecord" component={AddRecord} />
            <Link to="/register" >Register</Link>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
