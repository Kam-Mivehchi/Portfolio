import { useState } from 'react'
import { Link } from 'react-scroll'
import content from '../content';
import Spline from '@splinetool/react-spline';
import Contact from './contact'

const Hero = () => {
    const [openContact, setOpenContact] = useState(false);



    return (
        <>

            <div className="hero min-h-screen text-white overflow-hidden shadow-none relative " >
                <Spline scene="https://prod.spline.design/CBQ7gasxIh7OmHOb/scene.splinecode" className=" absolute top-[-23%]  lg:top-[-10%] scale-50 lg:scale-75 h-1/2 xl:scale-150 xl:top-[0%]" />

                <div className="hero-content text-center text-neutral-content relative ">

                    <div className="flex flex-col gap-4 ">

                        <h1 className="text-7xl font-bold text-stone-300/1 opacity-100 ">Kamyar <span className="text-teal-500">Mivehchi</span></h1>


                        <div className="flex flex-col gap-2 justify-center">
                            <h2 className="  font-bold   lg:text-xl">{content.tagline}</h2>
                            <h2 className="  font-bold lg:text-xl">{content.tagline2}</h2>
                        </div>
                        <div className="flex flex-col gap-4 lg:flex-row">


                            <Link to="portfolio" smooth={true} offset={-50} duration={100} delay={0}>
                                <button className="btn   btn-accent text-lg  px-20 border-2 font-bold hover:animate-none  hover:bg-gradient-to-br hover:from-purple-400 hover:to-accent hover:scale-105 active:scale-95 transition-all duration-1000 ease-in-out" > Projects</button>
                            </Link>
                            <a href="https://calendly.com/kammivehchi/tutoring-web-development">
                                <button className="btn   btn-primary animate-pulse   text-lg  px-20 border-2 font-bold hover:animate-none  hover:bg-gradient-to-br hover:from-purple-400 hover:to-accent hover:scale-105 active:scale-95 transition-all duration-1000 ease-in-out " >Tutoring</button>
                            </a>

                            {/* contact button and popup */}
                            <button

                                className="btn btn-outline btn-accent hover:bg-gradient-to-l hover:from-purple-400 hover:to-accent hover:scale-105 active:scale-95   transition-all duration-300 text-lg  px-20 border-2 font-bold ease-in-out w-min mx-auto " onClick={() => setOpenContact(!openContact)}>
                                Contact
                            </button>

                        </div>

                    </div>

                </div>
                <Contact openContact={openContact} setOpenContact={setOpenContact} />


            </div >
        </>

    )
}

export default Hero