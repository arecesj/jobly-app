import React, { Component } from 'react';
import Routes from './Routes';
import JoblyApi from './JoblyApi';
import { decode } from 'jsonwebtoken';
import './App.css';
import { NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currUser: null
    };
    this.loginUser = this.loginUser.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  async loginUser(data) {
    const token = await JoblyApi.confirmLogin(data);
    localStorage.setItem('token', token);
    await this.getCurrUser();
  }

  async createUser(data) {
    const token = await JoblyApi.createUser(data);
    localStorage.setItem('token', token);
    await this.getCurrUser();
  }

  async getCurrUser() {
    const payload = decode(localStorage.getItem('token'));
    const getCurrUser = await JoblyApi.getUser(payload.username);
    this.setState({ currUser: getCurrUser });
  }

  render() {
    let nav;
    if (this.state.currUser === null) {
      nav = (
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/login">
            Login
          </NavLink>
        </nav>
      );
    } else {
      nav = (
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/companies">
            Companies
          </NavLink>
          <NavLink exact to="/jobs">
            Jobs
          </NavLink>
          <NavLink exact to="/profile">
            Profile
          </NavLink>
          <NavLink exact to="/logout">
            logout
          </NavLink>
        </nav>
      );
    }
    return (
      <div className="App">
        {nav}
        <Routes
          loginUser={this.loginUser}
          currUser={this.state.currUser}
          createUser={this.createUser}
        />
      </div>
    );
  }
}

export default App;
