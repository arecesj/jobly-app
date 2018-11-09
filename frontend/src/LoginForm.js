import React, { Component } from 'react';
import './App.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      isLogin: true,
      errors: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.toggleToLogin = this.toggleToLogin.bind(this);
    this.toggleToSignup = this.toggleToSignup.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  async handleLogin(evt) {
    evt.preventDefault();
    try {
      await this.props.loginUser({
        username: this.state.username,
        password: this.state.password
      });
      this.setState({ username: '', password: '' });
      this.props.history.push('/jobs');
    } catch (err) {
      this.setState({ errors: err });
    }
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
    try {
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
    } catch (err) {
      this.setState({ errors: err });
    }
  }
  //TODO: Refactor forms to do the following:
  // Ternary that decides whether or not onSubmit uses handleCreate or handleLogin
  // Only have one form: two fields for handleLogin, display three addtnl field for handleCreate
  render() {
    let form;
    if (!this.state.isLogin) {
      form = (
        <div>
          <h1>SIGNUP</h1>
          <form className="Login" onSubmit={this.handleCreate}>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="email">Email: </label>
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
        </div>
      );
    } else {
      form = (
        <div>
          <h1>LOGIN</h1>
          <form className="Login" onSubmit={this.handleLogin}>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="password">Password: </label>
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
        </div>
      );
    }

    const errors = this.state.errors.map(e => <li>{e}</li>);

    return (
      <div>
        <button onClick={this.toggleToLogin}>Login</button>
        <button onClick={this.toggleToSignup}>Sign up</button>
        {form}
        <ul>{errors}</ul>
      </div>
    );
  }
}

export default LoginForm;
