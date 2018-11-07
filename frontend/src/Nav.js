import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  static defaultProps = {
    links: ['companies', 'jobs', 'profile', 'logout']
  };

  render() {
    const navbar = this.props.links.map(link => (
      <NavLink exact to={`/${link}`}>
        {link.toUpperCase()}
      </NavLink>
    ));
    return (
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        {navbar}
      </nav>
    );
  }
}

export default Nav;
