import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CompanyList from './CompanyList';
import JobList from './JobList';
import ProfileForm from './ProfileForm';
import CompanyCard from './CompanyCard';
import HomeContainer from './HomeContainer';
import LoginForm from './LoginForm';
import NotFound from './NotFound';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" render={props => <LoginForm {...props} />} />
        {/* TODO: Split the container into companies and jobs */}
        <Route
          exact
          path="/companies"
          render={props => <CompanyList {...props} />}
        />
        <Route
          exact
          path="/companies/:handle"
          render={props => <CompanyCard {...props} />}
        />
        <Route exact path="/jobs" render={props => <JobList {...props} />} />
        <Route
          exact
          path="/profile"
          render={props => <ProfileForm {...props} />}
        />
        {/* TODO: LOGOUT */}
        {/* <Route
          exact
          path="/logout"
          render={props => <HomeContainer {...props} />}
        /> */}
        <Route exact path="/" render={() => <HomeContainer />} />
        {/* TODO: Redirect not NotFound */}
        <Route render={() => <NotFound />} />
      </Switch>
    );
  }
}

export default Routes;
