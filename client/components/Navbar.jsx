import React from 'react';
import {Link} from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='navbar twelve columns clearfix'>
        <Link to='/' className='nav-title'><h5>Garrett Stott</h5></Link>
          <ul className='nav-links float-right'>
            <a href="#projects-div" title="Projects"><li>Projects</li></a>
            <a href="#about-div" title="About"><li>About</li></a>
            <a href="assets/GarrettStott.pdf" target="_blank" title="Resume"><li>Resume</li></a>
            <Link to='/blog'><li>Blog</li></Link>
          </ul>
      </div>
    )
  }
}

export default Navbar;
