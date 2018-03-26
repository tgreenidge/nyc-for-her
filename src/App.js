import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SignUpForm from './components/SignUpForm';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signUp" component={SignUpForm} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
