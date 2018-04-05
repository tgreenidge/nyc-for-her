import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import ErrorMessage from './ErrorMessage';

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    passwordConfirmation: "",
    newUser: {},
    message: "",
    redirectToUsersPage: false
  };
  
  handleChange = async event => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;
    this.setState({ [`${attributeToChange}`]: newValue });
  
    const updatedNewUser = { ...this.state.newUser };

    if (attributeToChange !== "passwordConfirmation") {
      updatedNewUser[attributeToChange] = newValue;  
    }

    this.setState({ newUser: updatedNewUser });
  };

  //check for password match
  isValidForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.passwordConfirmation
    );
  }

  //check for strong password
  isStrongPassword() {
    const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return (
      this.state.password.match(re) 
    )
  }

  handleSubmit = async event => {
    event.preventDefault();
   
    if (!this.isValidForm) {
      event.target.reset();
      this.setState({message: "Passwords do not match. Please try again"});
    } else if (this.isValidForm() && this.isStrongPassword()){
      this.props.createUser(this.state.newUser);
      this.setState({redirectToUsersPage: true});
    } else {
      event.target.reset();
      this.setState({message: 
        "Password is not Strong. Must have at least 8 characters, at least one letter in Upper Case, at least one letter in Lower Case, at least 1 special character (! $ # %), and at least 1 number."
      });
    }
  };

  
  render() {
    if (this.state.redirectToUsersPage) {
      return <Redirect to="/" />
    }

    return (
      <div>
       
        <div id="SignUpForm">
          <div>
            <h5>Sign Up</h5>
            <i className="fa fa-female" />
            <br />
            
            <ErrorMessage message={this.state.message}/>
            
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label htmlFor="email" className="col-md-2 col-form-label">
                  Email
                </label>
                <div className="col-md-10">
                  <input
                    id="sign-up-email"
                    name="email"
                    type="email"
                    onChange={this.handleChange}
                    className="form-control form-control-md is-valid"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="password" className="col-md-2 col-form-label">
                  Password
                </label>
                <div className="col-md-10">
                  <input
                    id="sign-up-password"
                    name="password"
                    type="password"
                    onChange={this.handleChange}
                    className="form-control form-control-md"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="passwordConfirmation"
                  className="col-md-2 col-form-label"
                >
                  Confirm Password
                </label>
                <div className="col-md-10">
                  <input
                    id="sign-up-password-confimation"
                    name="passwordConfirmation"
                    type="password"
                    onChange={this.handleChange}
                    className="form-control form-control-md"
                  />
                </div>
              </div>

              <div>
                <button type="submit" value="Sign Up">
                  Sign Me Up
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
