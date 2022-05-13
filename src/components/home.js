import React from 'react'
import Hero from './hero'
import Portfolio from './portfolio'
import About from "./about"
import { Element } from 'react-scroll'


const Home = () => {


    return (
        <div >

            <Hero />
            <Element name='about'><About /></Element>
            <Element name='portfolio' className=""><Portfolio /></Element>

        </div>
    )
}

export default Home