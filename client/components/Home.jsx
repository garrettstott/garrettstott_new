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
          <h1 className='home-title'>Garrett Stott</h1>
          <h4 className="home-subtitle">Software Developer</h4>
          <div className="contact-icons">
            <a href="https://github.com/garrettstott" target="_blank" title="GitHub">
              <i className="contact-fa fa fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/garrettstott" target="_blank" title="Linkedin">
              <i className="contact-fa fa fa-linkedin-square"></i>
            </a>
            <h5 className="contact-email">garrettstott@gmail.com</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
