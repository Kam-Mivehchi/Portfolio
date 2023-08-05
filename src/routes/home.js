import React, { lazy } from 'react';

const Hero = lazy(() => (import('../components/hero')));
const Portfolio = lazy(() => import('../components/portfolio'))

const About = lazy(() => (import('../components/about')));





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