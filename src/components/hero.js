import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-scroll'
import content from '../content';
import { BsXDiamond } from 'react-icons/bs'


const Hero = () => {


    return (
        <>
            <div className="hero min-h-screen text-white overflow-hidden    shadow-none" >

                <div className="hero-content text-center text-neutral-content  ">

                    <div className="max-w-md">

                        <Parallax speed={-100} opacity={[7, -5]}>
                            <h1 className=" font-['YellowTail'] text-7xl font-bold text-stone-300/1 opacity-100">Kamyar Mivehchi</h1>
                        </Parallax>

                        <Parallax opacity={[3, -2]}>
                            <Parallax speed={10} >
                                <Link to="about" smooth={true} offset={-50} >
                                    <button className="btn btn-outline  btn-accent animate-pulse hover:transition-colors  ease-in-out  hover:bg-gradient-to-b from-accent via-teal-600 to-accent  hover:scale-110 duration-900 text-lg  px-20 border-2 font-bold" >Explore</button>
                                </Link>
                            </Parallax>
                        </Parallax>

                    </div>

                </div>


                <Parallax speed={-80} opacity={[-3, 3]} scale={[.25, 2]} className='text-center text-lg md:text-2xl flex flex-col items-center gap-2'>
                    <h2 className="  font-bold ">{content.tagline2}</h2>
                    <h2 className=" text-sm font-bold px-auto opacity-50"><BsXDiamond /></h2>
                    <h2 className="  font-bold ">{content.tagline}</h2>
                </Parallax>

            </div >
        </>

    )
}

export default Hero