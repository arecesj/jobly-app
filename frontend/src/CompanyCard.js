import React, { Component } from 'react';
// import './App.css';

class CompanyCard extends Component {
  render() {
    return (
      <div className="CompanyCard">
        <br />
        <ul>
          <li>{this.props.company.name}</li>
          <li>{this.props.company.description}</li>
        </ul>
        <br />
      </div>
    );
  }
}

export default CompanyCard;
