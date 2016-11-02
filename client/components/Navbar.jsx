import React from 'react';
import {Link} from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='navbar twelve columns clearfix'>
        <Link to='/' className='nav-title'>Garrett Stott</Link>
          <ul className='nav-links'>
            <Link title='Projects' to='/projects'><li>Projects</li></Link>
            <Link title='about' to='/about'><li>About</li></Link>
            <a href='https://docs.google.com/document/d/1lV6kDY5QZo6vrQsVrEuye0LO0iW8PzRtGSkQJogXJjI/edit?usp=sharing' title='resume' target='_blank'><li>Resume</li></a>
            <Link title='blog' to='/blog'><li>Blog</li></Link>
          </ul>
      </div>
    )
  }
}

export default Navbar;
