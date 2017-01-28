import React from 'react';
import {Link} from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='navbar twelve columns clearfix'>
        <Link to='/' title='Home'><div className='navbar-image'></div></Link>
          <ul className='nav-links'>
            <Link title='Home' to='/'><li>Home</li></Link>
            <Link title='Projects' to='/projects'><li>Projects</li></Link>
            <Link title='About' to='/about'><li>About</li></Link>
            <a href='https://docs.google.com/document/d/1lV6kDY5QZo6vrQsVrEuye0LO0iW8PzRtGSkQJogXJjI/edit?usp=sharing' title='Resume' target='_blank'><li>Resume</li></a>
            <Link title='Blog' to='/blog'><li>Blog</li></Link>
          </ul>
      </div>
    )
  }
}

export default Navbar;
