import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'

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
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
