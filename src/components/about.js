import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import content from '../content/index';


const About = () => {

    return (
        <div className="  bg-fixed  text-white bg-black  bg-center bg-no-repeat bg-cover flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-700   via-black to-gray-700 shadow-xl" style={{ minHeight: '70vh' }}>
            <div className="w-11/12 mx-auto  flex flex-row items-center ">
                <Parallax speed={20} translateX={["70%", '20%',]} opacity={[3, -1]} >
                    <h1 className='text-4xl md:text-8xl  font-bold  mt-10 text-gray-600 ' style={{ marginRight: '-14rem' }}>About</h1>
                </Parallax>
                <Parallax speed={0} translateX={['25%', '0',]} >
                    <p className="text-left md:text-xl lg:text-2xl xl:text-3xl font-base w-3/4">{content.about.desc}</p>
                </Parallax>
            </div>
        </div >
    )
}

export default About