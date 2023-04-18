import React from 'react'
import { Link } from 'react-scroll'
import content from '../content';
import { BsXDiamond } from 'react-icons/bs'


const Hero = () => {


    return (
        <>
            <div className="hero min-h-screen text-white overflow-hidden shadow-none" >

                <div className="hero-content text-center text-neutral-content  ">

                    <div className="max-w-md">

                        <h1 className="text-7xl  text-stone-300/1 opacity-100 ">Kamyar Mivehchi</h1>


                        <Link to="about" smooth={true} offset={-50} >
                            <button className="btn btn-outline  btn-accent animate-pulse hover:transition-colors  ease-in-out  hover:bg-gradient-to-b from-accent via-teal-600 to-accent  hover:scale-110 duration-900 text-lg  px-20 border-2 font-bold" >Explore</button>
                        </Link>


                    </div>

                </div>

                <h2 className="  font-bold ">{content.tagline2}</h2>
                <h2 className=" text-sm font-bold px-auto opacity-50"><BsXDiamond /></h2>
                <h2 className="  font-bold ">{content.tagline}</h2>

            </div >
        </>

    )
}

export default Hero