import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CompanyList from './CompanyList';
import JobList from './JobList';
import ProfileForm from './ProfileForm';
import Company from './Company';
import HomeContainer from './HomeContainer';
import LoginForm from './LoginForm';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/login"
          render={props => (
            <LoginForm
              {...props}
              loginUser={this.props.loginUser}
              createUser={this.props.createUser}
            />
          )}
        />
        <Route
          exact
          path="/companies"
          render={props => <CompanyList {...props} />}
        />
        <Route
          exact
          path="/companies/:handle"
          render={props => <Company {...props} />}
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
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
