import axios from 'axios';
const BASE_URL = 'http://localhost:3001';

class JoblyApi {
  static async request(endpoint, params = {}, verb = 'get') {
    // for now, hardcode a token for user "testuser"
    let _token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc' +
      '3R1c2VyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1NDE1NjQ2Nzl9.LYDHSkl81gEm' +
      '7jfHv9wJhzD4ndpuBkSzBan8Nirb6UY';

    console.debug('API Call:', endpoint, params, verb);

    let q;

    if (verb === 'get') {
      q = axios.get(`${BASE_URL}/${endpoint}`, {
        params: { _token, ...params }
      });
    } else if (verb === 'post') {
      q = axios.post(`${BASE_URL}/${endpoint}`, { _token, ...params });
    } else if (verb === 'patch') {
      q = axios.patch(`${BASE_URL}/${endpoint}`, { _token, ...params });
    }

    try {
      return (await q).data;
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  /** COMPANY METHODS */
  static async getAllCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanyViaSearch(data) {
    console.log('what does data look like atm?', data);
    let res = await this.request('companies', data);
    return res.companies;
  }
  //TODO:Creating and Editing companies
  // static async createCompany() {}

  // static async editCompany(handle) {}

  /** JOB METHODS */
  static async getAllJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }

  static async getJob(id) {
    let res = await this.request(`companies/${id}`);
    return res.job;
  }
  //TODO: Creating and Editing jobs
  // static async createJob() {}

  // static async editJob() {}

  /** USER/APPLICATION METHODS */
}

export default JoblyApi;
