import React, { Component } from 'react';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import linkedln from './images/linkedln.png';
import git from './images/git.png';
import './css/footer.css'

class Footer extends Component {
  render() {
    return (
      <div className='foot text-center' >
        <img className='facebook' src={facebook} alt='facebook'></img>
        <img className='twitter' src={twitter} alt='twitter'></img>
        <img className='linkedln' src={linkedln} alt='linkedln'></img>
        <img className='git' src={git} alt='git'></img>
        <p>&#9400; LabCar technologies Inc.</p>
      </div>
    );
  }
}

export default Footer;