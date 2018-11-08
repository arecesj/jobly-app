import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      name: '',
      num_employees: 0,
      description: '',
      jobs: [],
      logo_url: ''
    };
  }

  async componentDidMount() {
    const getCompanyInfo = await JoblyApi.getCompany(
      this.props.match.params.handle
    );
    console.log(getCompanyInfo);
    this.setState({ ...getCompanyInfo });
  }
  render() {
    //TODO: LOADING
    //TODO: Error handling?
    let jobs;
    if (this.state.jobs.length) {
      jobs = this.state.jobs.map(job => <JobCard job={job} />);
    } else {
      jobs = <li>No jobs available for {this.state.name}</li>;
    }
    return (
      <div className="Company">
        <h2>{this.state.name}</h2>
        <h3>{this.state.description}</h3>
        <div className="JobsByCompany">
          <ul>{jobs}</ul>
        </div>
      </div>
    );
  }
}

export default Company;
