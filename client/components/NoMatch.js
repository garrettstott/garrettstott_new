import React from 'react';
import Navbar from './Navbar';

const NoMatch = () => (
  <div>
    <Navbar />
    <div className='center twelve columns'>
      <div className='frown mar-top-md'></div>
      <h1>404</h1>
      <p className='mar-pad-no'>Oops! It looks like the page you're looking for doesn't exist.</p>
      <p className='mar-pad-no'>Please use the back button or the navigation to leave this page.</p>
    </div>
  </div>
);

export default NoMatch;
