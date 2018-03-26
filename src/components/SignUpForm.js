import React, { Component } from 'react';

class SignUpForm extends Component {
  state = {
    newUser: {}
  };
  handleChange = event => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const updatedNewUser = { ...this.state.newUser };
    updatedNewUser[attributeToChange] = newValue;
    this.setState({ newUser: updatedNewUser });
  };

  handleSubmit = event => {
    event.preventDefault();
    //this.props.createUser(this.state.newUser);
  };

  render() {
    return (
      <div id="SignUpForm">
        <div>
          <h5>Sign Up</h5>
          <i className="fa fa-female" />
          <br />
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label htmlFor="username" className="col-md-2 col-form-label">
                Username
              </label>
              <div className="col-md-10">
                <input
                  name="username"
                  type="text"
                  onChange={this.handleChange}
                  className="form-control form-control-md"
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="email" className="col-md-2 col-form-label">
                Email
              </label>
              <div className="col-md-10">
                <input
                  name="email"
                  type="text"
                  onChange={this.handleChange}
                  className="form-control form-control-md"
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="password" className="col-md-2 col-form-label">
                Password
              </label>
              <div className="col-md-10">
                <input
                  name="password"
                  type="text"
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
                  name="passwordConfirmation"
                  type="text"
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
    );
  }
}

export default SignUpForm;
