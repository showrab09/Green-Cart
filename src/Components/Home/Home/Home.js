import React from 'react';
import Advantage from '../../Advantage/Advantage';
import Banner from '../Banner/Banner'
import Services from '../Services/Services';
import Training from '../Training/Training';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Services></Services>
          <Training></Training>
          <Advantage></Advantage>
        </div>
    );
};

export default Home;