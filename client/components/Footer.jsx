import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let date = new Date().getFullYear();
    return (
      <div className='footer twelve columns'>
        <div className='footer-image'></div>
        <h6 className='mar-pad-no'>&copy; Garrett Stott {date}</h6>
      </div>
    )
  }
}

export default Footer;
