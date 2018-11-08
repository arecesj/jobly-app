import React, { Component } from 'react';
import Nav from './Nav';
import Routes from './Routes';
import JoblyApi from './JoblyApi';
import { decode } from 'jsonwebtoken';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currUser: null
    };
    this.loginUser = this.loginUser.bind(this);
  }

  async loginUser(data) {
    const token = await JoblyApi.confirmLogin(data);
    localStorage.setItem('token', token);
    await this.getCurrUser();
  }

  async getCurrUser() {
    const payload = decode(localStorage.getItem('token'));
    console.log('decoded paload', payload);
    const getCurrUser = await JoblyApi.getUser(payload.username);
    this.setState({ currUser: getCurrUser });
    console.log(this.state.currUser);

    //make a backend req to get the user
    //once we have the user, we want to hydrate this.state.currUser
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Routes loginUser={this.loginUser} currUser={this.state.currUser} />
      </div>
    );
  }
}

export default App;
