import React, { Component } from 'react';
import Nav from './Nav';
import Routes from './Routes';
import JoblyApi from './JoblyApi';
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
    localStorage.setItem('token', JSON.stringify(token));
    this.setState({ currUser: token });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Routes loginUser={this.loginUser} />
      </div>
    );
  }
}

export default App;
