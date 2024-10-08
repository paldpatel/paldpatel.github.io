import React from 'react';
import './home.css'; // Ensure your CSS file contains styles for better layout
import Header from '../header/index';
import Body from '../body/index';

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <div className='body-container'>
        <Body />
      </div>
    </div>
  );
};

export default Home;
