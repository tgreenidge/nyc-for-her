import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SignUpForm from './components/SignUpForm';
import Login from './components/Login';
import axios from 'axios';

class App extends Component {
  state = {
    currentUser: {
      userName: 'ejonelunas'
    },
    resources: []
  };

  async componentDidMount() {
    //get all womens resources from nyc open data
    await axios
      .get('https://data.cityofnewyork.us/resource/386y-9exk.json')
      .then(response => {
        const resources = response.data;
        this.setState({ resources });
      });
  }

  mockLogIn = logInInfo => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  };

  render() {
    const HomeComponent = () => <Home resources={this.state.resources} />;
    const LoginComponent = () => (
      <Login
        user={this.state.currentUser}
        mockLogIn={this.mockLogIn}
        {...this.props}
      />
    );
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <div className="content">
              <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/signUp" component={SignUpForm} />
                <Route exact path="/login" component={LoginComponent} />
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
