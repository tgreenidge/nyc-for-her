import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SignUpForm from './components/SignUpForm';
import Login from './components/Login';
import NewResults from './components/NewResults';
import SavedResults from './components/SavedResults';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
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
    
    const usersResponse = await axios.get(process.env.REACT_APP_HOST+'/users')
    this.setState({
        users: usersResponse.data,
        usersResponse
    });
  }

  createUser = async (newUser) => {
    try {
      const newUserResponse = await axios.post(process.env.REACT_APP_HOST+'/users', newUser)
      const newUserFromDatabase = newUserResponse.data

      const updatedUsersList = [...this.state.users]
      updatedUsersList.push(newUserFromDatabase)

      this.setState({users: updatedUsersList})

    } catch (error) {
      console.log("Error creating new User")
    }
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

    const SignUpComponent = () => <SignUpForm createUser={this.createUser} />;

    const SavedResultsComponent = () => <SavedResults />;

    const NewResultsComponent = () => <NewResults data={this.state.resources} />;
    
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <div className="content">
              <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/signUp" component={SignUpComponent} />
                <Route exact path="/login" component={LoginComponent} />
                <Route exact path="/savedResults" component={SavedResultsComponent} />
                <Route exact path="/newResults" component={NewResultsComponent} />
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
