import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ListingContainer from './ListingContainer';
import ProfileForm from './ProfileForm';
import CompanyListing from './CompanyListing';
import HomeContainer from './HomeContainer';
import LoginForm from './LoginForm';
import NotFound from './NotFound';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" render={props => <LoginForm {...props} />} />
        <Route
          exact
          path="/companies"
          render={props => <ListingContainer {...props} />}
        />
        <Route
          exact
          path="/companies/:handle"
          render={props => <CompanyListing {...props} />}
        />
        <Route
          exact
          path="/jobs"
          render={props => <ListingContainer {...props} />}
        />
        <Route
          exact
          path="/profile"
          render={props => <ProfileForm {...props} />}
        />
        <Route
          exact
          path="/logout"
          render={props => <HomeContainer {...props} />}
        />
        <Route exact path="/" render={() => <HomeContainer />} />
        <Route render={() => <NotFound />} />
      </Switch>
    );
  }
}

export default Routes;
