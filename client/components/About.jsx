import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='twelve columns'>
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

          {/* DEVPOINT */}

          <h5><strong><a href='http://www.devpointlabs.com' target='_blank'>DevPoint Labs</a></strong>, Salt Lake City, UT</h5>
          <h6><strong>Co-Instructor</strong>, July 2016 - Present</h6>
          <ul>
            <li>I have applied my history of management and organizational roles to help structure the curriculum and day-to-day flow of the programs at DevPoint Labs.</li>
            <li>Running Labs, keeping students on track with their projects.</li>
            <li>Maintaining <a href='http://www.devpointlabs.com' target='_blank'>DevPointLabs.com</a></li>
          </ul>
          <h6><strong>Teaching Assistant</strong>, May 2016 – July 2016</h6>
          <ul>
            <li>Monitor students’ progress through DevPoint Labs.</li>
            <li>Teaching Assistant in maximizing student understanding and development.</li>
            <li>Teach Ruby on Rails along with other web technologies -</li>
            <li>Including: Ruby, Rails, HTML, CSS, JavaScript, SQL, Git, React and Redux</li>
          </ul>

          {/* PERFORMANCE UT */}

          <h5><strong><a href='https://www.performanceut.com/inventory/' target='_blank'>High West Digital Architects</a></strong>, Salt Lake City, UT</h5>
          <h6><strong>Contract Developer</strong>, July 2016 - Present</h6>
          <ul>
            <li>Project: <a href='https://www.performanceut.com/inventory/' target='_blank'>PerformanceUT.com</a></li>
            <li>Inventory Management</li>
              <li>Worked on optimizing website’s JavaScript and CSS.</li>
            	<li>Worked on security, by refactoring code to enable SSL certification.</li>
            	<li>Built new features for current website.</li>
          </ul>

          {/* LOLO */}

          <h5><strong><a href='http://www.lolofit.com/' target='_blank'>Lolo</a></strong>, Salt Lake City, UT</h5>
          <h6><strong>Contract Developer</strong>, October 2016 - Present</h6>
          <ul>
            <li>Project: <a href='http://www.yesfitnessmusic.com/#/store/home' target='_blank'>Yes! Fitness Music</a></li>
            <li>I'm currently working on a few new features and bug fixes.</li>
            <li>Future work on this project will involve a full rewrite of our API, and client side website.</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default About;
