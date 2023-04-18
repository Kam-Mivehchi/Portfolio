import React from 'react'
import { Link } from 'react-scroll'
import content from '../content';
import { BsXDiamond } from 'react-icons/bs'


const Hero = () => {


    return (
        <>
            <div className="hero min-h-screen text-white overflow-hidden shadow-none" >

                <div className="hero-content text-center text-neutral-content  ">

                    <div className="flex flex-col gap-4">

                        <h1 className="text-7xl font-bold text-stone-300/1 opacity-100 ">Kamyar <span className="text-teal-500">Mivehchi</span></h1>


                        <div className="flex flex-col gap-2 justify-center">
                            <h2 className="  font-bold   lg:text-xl">{content.tagline}</h2>
                            <h2 className="  font-bold lg:text-xl">{content.tagline2}</h2>
                        </div>
                        <div className="flex flex-col gap-4 lg:flex-row">



                            <Link to="portfolio" smooth={true} offset={-50} >
                                <button className="btn   btn-accent animate-pulse     hover:scale-105  text-lg  px-20 border-2 font-bold hover:bg-gradient-to-tl hover:from-accent hover:via-white hover:to-accent hover:animate-none transition-all duration-500 ease-in" > Projects</button>
                            </Link>
                            <a href="mailto:kammivehchi@gmail.com">

                                <button className="btn btn-outline btn-accent    hover:bg-gradient-to-bl hover:from-accent hover:via-white hover:to-accent  hover:scale-105 transition-all duration-500 text-lg  px-20 border-2 font-bold ease-in w-min mx-auto" >Contact</button>
                            </a>


                        </div>

                    </div>

                </div>


            </div >
        </>

    )
}

export default Hero