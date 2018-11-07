import React, { Component } from 'react';
import './App.css';

class LoginForm extends Component {
  static defaultProps = {
    username: 'Username:',
    password: 'Password:'
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    //use models to auth and send existing state?
    //await make server call axios
    //if server call is right, redirect
    //else display wrong username/password

    this.setState({ username: '', password: '' });
  }

  render() {
    // const response =
    return (
      <form actionclassName="Login" onSubmit={this.handleSubmit}>
        <label htmlFor="username">{this.props.username}</label>
        <input
          type="text"
          id="username"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="password">{this.props.password}</label>
        <input
          type="text"
          id="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />

        <button>Log in</button>
      </form>
    );
  }
}

export default LoginForm;
