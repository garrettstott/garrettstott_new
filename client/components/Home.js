import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='home twelve columns'>
        <div className='twelve columns'>
          <div className='garrettstott'></div>
          <h3 className='home-title'>Garrett Stott</h3>
          <h5 className="home-subtitle">Full Stack Ruby on Rails Developer</h5>
          <h5 className="contact-email">garrettstott@gmail.com</h5>
          <div className="contact-icons">
            <a href="https://github.com/garrettstott" target="_blank" title="GitHub">
              <i className="contact-fa fa fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/garrettstott" target="_blank" title="Linkedin">
              <i className="contact-fa fa fa-linkedin-square"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
