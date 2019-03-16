import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//COMPONENTS
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//ROUTES
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Protected from './Protected';
import AboutUs from './components/pages/AboutUs';

class App extends Component {
  render() {
    //console.log(this.props.location);
    return (
      <Router>
        <div className="app-container">
          <Route path="/" component={NavBar} />
          <div className="main-app">
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route path="/" component={Protected} />
            <Route exact path="/aboutUs" component={AboutUs} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;