import React from 'react';
import Slider from './HomeSlider/Slider';
import Features from './Features/Features';
import Packages from './Packages/Packages';
import NewsLetter from './NewsLetter/NewsLetter';
import PopularDestination from './PopularDestination/PopularDestination';

const HomePage = () => {
    return (
        <div className="homePage">
            <Slider />
            <Features />
            <Packages />
            <PopularDestination />
            <NewsLetter />
        </div>
    );
};

export default HomePage;