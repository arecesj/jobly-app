import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';
// import './App.css';

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      search: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    const searchRes = await JoblyApi.getJobViaSearch({
      search: this.state.search
    });
    this.setState({ jobs: searchRes, search: '' });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  async componentDidMount() {
    const getJobs = await JoblyApi.getAllJobs();
    this.setState({ jobs: getJobs });
  }
  render() {
    const jobs = this.state.jobs.map(job => (
      <li>
        <JobCard job={job} />
      </li>
    ));
    return (
      <div className="JobList">
        <h1>Jobly! Job Listings</h1>
        <div className="Search">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="search"
              value={this.state.search}
              onChange={this.handleChange}
            />
            <button>Submit</button>
          </form>
        </div>
        <div className="Jobs">
          <ul>{jobs}</ul>
        </div>
      </div>
    );
  }
}

export default JobList;
