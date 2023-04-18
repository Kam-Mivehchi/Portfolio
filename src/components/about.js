import React from 'react'

import content from '../content/index';


const About = () => {

    return (
        <div className="  bg-fixed  text-white bg-black  bg-center bg-no-repeat bg-cover flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-700   via-black to-gray-700 shadow-xl" >
            <div className=" mx-auto  flex flex-col items-center pt-6 pb-14 gap-4 lg:flex-row lg:flex-wrap lg:justify-center ">
                {/* <Parallax speed={20} translateX={["70%", '20%',]} opacity={[3, -1]} >
                </Parallax> */}
                <h1 className='text-6xl lg:text-8xl  font-bold   text-teal-500  lg:basis-full text-center'>About</h1>
                {/* <Parallax speed={0} translateX={['25%', '0',]} >
                </Parallax> */}
                <div class="avatar lg:basis-1/3  lg:my-6">
                    <div class="w-48 md:w-72 lg:w-96   mx-auto  rounded-full  mask mask-hexagon">

                        <img src={content.about.image.url} alt={content.about.image.alt} className="" />
                    </div>
                </div>
                <p className="text-center lg:text-left text-sm md:text-xl  2xl:text-4xl lg:basis-1/2 w-10/12 lg:w-full relative before:content-[''] before:absolute before:bg-teal-500 before:w-full before:h-1 before:left-0 before:top-[-.75rem]    lg:before:h-[120%] lg:before:w-1 lg:before:left-[-1.5rem] lg:before:top-0 xl:before:left-[-2rem]  xl:before:w-2">{content.about.desc}</p>
            </div>
        </div >
    )
}

export default About