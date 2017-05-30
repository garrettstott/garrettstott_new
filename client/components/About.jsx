import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='about twelve columns'>
        <div className='pad-left-sm'>
          <h1>About</h1>
        </div>
        <div className='five columns'>
          <h4>Bio</h4>
          <p>
          I've always had a love for all things computery. I have been building computers since I received my first job. For over 15 years I have been building, repairing and been general IT for friends and family. A year ago, after tinkering with basic HTML, CSS and a little bit of JavaScript, I discovered a new passion in my life. I decided to change my career and life forever. I found a great web development Bootcamp, paid off most of my debts, and set my life up to be able to afford to take 3 months of my life and put them into the intense world, at DevPoint Labs.
          </p>
          <p>
          Prior to the Bootcamp, I spent a year studying. I spent a lot of time online using free courses, such as CodeCademy. I also utilized Udemy. I finished many courses ranging from JavaScript, building full Rails apps, BDD and TDD, and other web development courses covering many topics. During the 3 months at DevPoint Labs, we put a lot of focus on Ruby, Rails, PostgreSQL, JavaScript, and everything web development. It was a great learning experience. I learned that being in the web development world, I will forever be a student, constantly learning new technologies.
          </p>
          <p>
          I am currently a co-instructor at DevPoint Labs and a contract web developer.
          </p>
        </div>

        <div className='six columns'>

          <h4>Experience</h4>

          {/* LOLO */}

          <h5><a title='LoloFit.com' href='http://www.lolofit.com/' target='_blank'>Lolo</a>, Salt Lake City, UT</h5>
          <h6>Software Engineer, October 2016 - Present</h6>
          <p>Projects: JillianMichaels.com, YesFitnessMusic.com (various products)</p>
          <p> 
            At lolo, I develop features for multiple projects, primarily in Ruby on Rails and React JS. 
            The products I work on include the website, back-end engine, and client front-end for a fitness 
            platform in web/iOS/Android (Rails 4 / React); a music distribution platform (Rails 4 / React) and 
            a music royalties management platform (Rails 2). With the breadth of technologies used in lolo's 
            products, a big part of my job is working in a multitude of frameworks and implementing 
            interconnectivity between them.
          </p>

          {/* PERFORMANCE UT */}

          <h5><a title='No Website' href='#'>High West Digital Architects</a>, Salt Lake City, UT</h5>
          <h6>Software Engineer, July 2016 - Present</h6>
          <p>Project: performanceut.com</p>
          <p>
            At High West Digital Architects, I develop features for a single project, primarily in Ruby on Rails 
            and JS. I work on both the front-end and back-end on this project (Rails 4 / JS) a multi dealership, 
            inventory management, shop and for sale by owner website.
          </p>

          {/* DEVPOINT */}

          <h5><a title='DevPointLabs.com' href='http://www.devpointlabs.com' target='_blank'>DevPoint Labs</a>, Salt Lake City, UT</h5>
          <h6>Co-Instructor, April 2016 - April 2017</h6>
          <p> 
            At DevPoint Labs I applied my knowledge of Ruby on Rails, Javascript, React, HTML & CSS, 
            and other concepts presented in the DevPoint Labs Full-Stack program to solidify the concepts with students during lecture and projects.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
