import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='twelve columns'>
        <img class="tron-profile" src={require('../images/garrettstott.jpg')} title="Garrett Stott" />
        <h5 class="code-text text-center">Full Stack Ruby on Rails Developer</h5>
        <h5 class="contact-email-text">garrettstott@gmail.com</h5>
        <div class="text-center contact-icons">
          <a href="https://github.com/garrettstott" target="_blank" title="GitHub">
            <i class="contact-fa fa fa-github"></i></a>
          <a href="https://www.linkedin.com/in/garrett-stott" target="_blank" title="Linkedin">
            <i class="contact-fa fa fa-linkedin-square"></i></a>
          <a class="tron-link" href="#" title="You Are Here"></a>
        </div>
        <a href='#projects-div'>
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </a>
    </div>
    )
  }
}

export default Home;
