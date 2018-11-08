import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import './App.css';

class CompanyCard extends Component {
  render() {
    return (
      <div className="CompanyCard">
        <br />
        <ul>
          <NavLink to={`/companies/${this.props.company.handle}`}>
            <li>{this.props.company.name}</li>
            <li>{this.props.company.description}</li>
          </NavLink>
        </ul>
        <br />
      </div>
    );
  }
}

export default CompanyCard;
