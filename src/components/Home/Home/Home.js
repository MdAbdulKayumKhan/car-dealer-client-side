import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Navigation from '../../Shared/Navigation/Navigation';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
        </div>
    );
};

export default Home;