import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import CompanyCard from './CompanyCard';

class CompanyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      search: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    const searchRes = await JoblyApi.getCompanyViaSearch({
      search: this.state.search
    });
    this.setState({ companies: searchRes, search: '' });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  async componentDidMount() {
    const getCompanies = await JoblyApi.getAllCompanies();
    this.setState({ companies: getCompanies });
  }

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
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="search"
              value={this.state.search}
              onChange={this.handleChange}
            />
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
