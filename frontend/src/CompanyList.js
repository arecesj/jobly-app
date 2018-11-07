import React, { Component } from 'react';
// import './App.css';
import CompanyCard from './CompanyCard';

class CompanyList extends Component {
  render() {
    return (
      <div className="CompanyList">
        <h1>Jobly! Company Listings</h1>
        <h3>All the jobs in one, convenient place.</h3>
        <h2>Welcome back!</h2>
        <CompanyCard />
      </div>
    );
  }
}

export default CompanyList;
