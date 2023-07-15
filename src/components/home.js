import React, { lazy } from 'react';

const Hero = lazy(() => (import('./hero')));
const Portfolio = lazy(() => import('./portfolio'))

const About = lazy(() => (import('./about')));





const Home = () => {


    return (
        <div className='relative'   >
            <Hero />
            <About />
            <Portfolio />

        </div>
    )
}

export default Home