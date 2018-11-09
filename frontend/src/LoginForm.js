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
      email: '',
      isLogin: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.toggleToLogin = this.toggleToLogin.bind(this);
    this.toggleToSignup = this.toggleToSignup.bind(this);
  }

  handleChange(evt) {
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

  async handleSignup(evt) {
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
      email: '',
      isLogin: true
    });
    this.props.history.push('/jobs');
  }

  toggleToLogin() {
    this.setState({ isLogin: true });
    console.log(this.state);
  }

  toggleToSignup() {
    this.setState({ isLogin: false });
    console.log(this.state);
  }

  async handleCreate(evt) {
    evt.preventDefault();
    await this.props.createUser({
      username: this.state.username,
      password: this.state.password,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
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
    let form;
    if (!this.state.isLogin) {
      form = (
        <form className="Login" onSubmit={this.handleCreate}>
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
          <label htmlFor="firstName">{this.props.firstName}</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="lastName">{this.props.lastName}</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="email">{this.props.email}</label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <button>Submit</button>
        </form>
      );
    } else {
      form = (
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
          <button>Submit</button>
        </form>
      );
    }

    /*
    what is the best way to toggle login/sign up forms?
    -load login form by default, have option for sign up
    */

    // let returningUser = this.state.isLogIn ? ... : ...

    return (
      <div>
        <h1>LOGIN OR SIGNUP, THUG</h1>
        <button onClick={this.toggleToLogin}>Login</button>
        <button onClick={this.toggleToSignup}>Sign up</button>
        {form}
      </div>
    );
  }
}

export default LoginForm;
