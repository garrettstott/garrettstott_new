import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='home twelve columns'>
        <div className='garrettstott'></div>
        <div className='twelve columns'>
          <h5 className="home-title">Full Stack Ruby on Rails Developer</h5>
          <h5 className="contact-email">garrettstott@gmail.com</h5>
          <div className="contact-icons">
            <a href="https://github.com/garrettstott" target="_blank" title="GitHub">
              <i className="contact-fa fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/garrettstott" target="_blank" title="Linkedin">
              <i className="contact-fa fa fa-linkedin-square"></i></a>
            <a className="tron-link" href="#" title="You Are Here"></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
