import React, { Component } from 'react';
// import './App.css';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.currUser,
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.props.currUser);
    this.props.editUser(this.props.currUser.username);
  }

  async handleChange(evt) {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <div className="ProfileForm">
        <h1>Jobly! Profile</h1>
        <h3>All the jobs in one, convenient place.</h3>
        <h2>Welcome back!</h2>
        <h1>EDIT</h1>
        <form className="Edit" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
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

          <label htmlFor="photo_url">Photo URL: </label>
          <input
            type="text"
            id="photo_url"
            name="photo_url"
            value={this.state.photo_url}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="password">Re-enter Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default ProfileForm;
