import React, { Component } from 'react';
// import './App.css';
import CompanyCard from './CompanyCard';

class CompanyList extends Component {
  render() {
    const companies = <li>'umm, reee?'</li>;
    return (
      <div className="CompanyList">
        <h1>Jobly! Company Listings</h1>
        <div className="Search">
          <form action="">
            <input type="text" />
            <button>Search</button>
          </form>
        </div>
        <div className="Companies">
          <ul>{companies}</ul>
        </div>
      </div>
    );
  }
}

export default CompanyList;
