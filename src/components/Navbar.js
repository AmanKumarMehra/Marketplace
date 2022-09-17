import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow nav_bar">
          
          <ul className = "navbar-nav px-3 navbar-brand">Ethereum Network</ul>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className='text-white'><span id="accounts"> {this.props.account}</span> </small>
            </li>
          </ul>

        </nav>
    );
  }
}

export default Navbar;