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

  async handleSubmit(evt) {
    evt.preventDefault();
    await this.props.loginUser({
      username: this.state.username,
      password: this.state.password
    });
    this.setState({ username: '', password: '' });
    this.props.history.push('/jobs');
  }

  render() {
    return (
      <form className="Login" onSubmit={this.handleSubmit}>
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
          type="password"
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
