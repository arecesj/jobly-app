import React, { Component } from 'react';
import './App.css';

class LoginForm extends Component {
  static defaultProps = {
    username: 'Username:',
    password: 'Password:',
    firstName: 'First Name:',
    lastName: 'Last Name:',
    email: 'Email:'
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSignupChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  async handleLogin(evt) {
    evt.preventDefault();
    await this.props.loginUser({
      username: this.state.username,
      password: this.state.password
    });
    this.setState({ username: '', password: '' });
    this.props.history.push('/jobs');
  }
  async handleCreate(evt) {
    evt.preventDefault();
    await this.props.createUser({
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
    });
    this.setState({
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: ''
    });
    this.props.history.push('/jobs');
  }

  render() {
    let div;
    if (1) {
      div = <div> with things</div>;
    }
    return (
      <div>
        <h1>LOGIN OR SIGNUP, THUG</h1>
        <form className="Login" onSubmit={this.handleLogin}>
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
          <br />
          {div}
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
