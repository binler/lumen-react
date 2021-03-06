import React from 'react';
import NavBar from './NavBar';
import SiteLogo from './SiteLogo';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header clearfix">
        <NavBar pageTemplate={this.props.pageTemplate} logoutLink={this.props.logoutLink}/>
        <SiteLogo pageTemplate={this.props.pageTemplate} user={this.props.user}/>
      </div>
    );
  }
}