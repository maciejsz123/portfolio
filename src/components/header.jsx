import React, { Component } from 'react';

window.onresize = function() {
  if(document.querySelector('.hamburger').classList.contains('clicked-hamburger')) {
    document.querySelector('.hamburger').classList.remove('clicked-hamburger');
    document.querySelector('.headerul').classList.remove('hamburger-active-display');
  }
}

class Header extends Component {

onClick() {
  document.querySelector('.hamburger').classList.toggle('clicked-hamburger');
  document.querySelector('.headerul').classList.toggle('hamburger-active-display');
}

closeMenu(e) {
  if(document.querySelector('.headerul').classList.contains('hamburger-active-display')) {
    document.querySelector('.hamburger').classList.remove('clicked-hamburger');
    document.querySelector('.headerul').classList.remove('hamburger-active-display');
  }
}


  render() {
    return(
      <div id='header'>
        <ul onClick={this.closeMenu.bind(this)} className='headerul'>
          <li><a href='#projectsComp'>projects</a></li>
          <li><a href='#experimentsComp'>experiments</a></li>
          <li><a href='#skills'>skills</a></li>
        </ul>
        <div className="hamburger" onClick={this.onClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
}

export default Header;
