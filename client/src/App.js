import React, { Component } from 'react';
import './App.css';
import search from './pages/search'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Router> 
      <div> 
        <div>
          <Switch> 
          <Route exact path='/' component={ search } />
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
