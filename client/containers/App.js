import React from 'react';
import Navbar from '../components/Navbar';

const App = ({ children }) => (
  <div>
    <div className='wrapper'>
      <Navbar />
      { children }
    </div>
  </div>
);

export default App;
