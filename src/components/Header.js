import React, { Component } from 'react';
import './css/header.css';
import logo from './images/logo.svg';


class Header extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg  bg-light'>
        <img className='logo' src={logo} alt='logo'></img>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <a className='nav-item nav-link active' href=''>Home <span className='sr-only'>(current)</span></a>
            <a className='nav-item nav-link' href=''>Registrate</a>
            <a className='nav-item nav-link' href=''>Inicia Sesión</a>
          </div>
        </div>
      </nav>

    );
  }
}

export default Header;