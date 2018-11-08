import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import CompanyCard from './CompanyCard';

class CompanyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
  }

  async componentDidMount() {
    let getCompanies = await JoblyApi.getAllCompanies();
    this.setState({ companies: [...getCompanies] });
  }
  //TODO: Create Loading functionality so it all renders at the same time
  render() {
    let companies;
    if (this.state.companies.length > 0) {
      companies = this.state.companies.map(company => (
        <li>
          <CompanyCard company={company} />
        </li>
      ));
    } else {
      companies = <li>LOADING</li>;
    }
    return (
      <div className="CompanyList">
        <h1>Jobly! Company Listings</h1>
        <div className="Search">
          {/* TODO: Make this actually work pls */}
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
