import React, { Component } from 'react';

class Login extends Component {
  state = {
    user: {}
  };
  handleChange = event => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    // const updatedNewUser = { ...this.state.newUser };
    // updatedNewUser[attributeToChange] = newValue;
    // this.setState({ newUser: updatedNewUser });
  };

  handleSubmit = event => {
    event.preventDefault();
    //this.props.createUser(this.state.newUser);
  };

  render() {
    return (
      <div id="Login">
        <div>
          <h5>Login</h5>
          <i className="fa fa-female" />
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

            <div>
              <button type="submit" value="login">
                Log Me In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
