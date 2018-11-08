import React, { Component } from 'react';
// import './App.css';

class JobCard extends Component {
  render() {
    return (
      <div className="JobCard">
        <br />
        <ul>
          <li>{this.props.job.title}</li>
          <li>{this.props.job.salary}</li>
          <li>{this.props.job.equity}</li>
          <button>Apply</button>
        </ul>
        <br />
      </div>
    );
  }
}

export default JobCard;
