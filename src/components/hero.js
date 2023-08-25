import React, { lazy, useState } from 'react';

import content from '../content';
import { BsDisplay } from "react-icons/bs"
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Contact = lazy(() => import('./contact'))

const Hero = () => {
    const [openContact, setOpenContact] = useState(false);
    const { project } = content;


    return (
        <>

            <div className="hero min-h-screen text-white overflow-hidden shadow-none relative " >
                {/* causing performance issues remove for now */}
                {/* <Spline scene="https://prod.spline.design/CBQ7gasxIh7OmHOb/scene.splinecode" className=" absolute top-[-23%]  lg:top-[-10%] scale-50 lg:scale-75 h-1/2 xl:scale-150 xl:top-[0%]" /> */}

                <div className="hero-content  text-neutral-content  flex flex-col  w-screen gap-24">

                    <div className="flex flex-col gap-4 items-center justify-center">

                        <h1 className="text-7xl font-bold text-stone-300/1 opacity-100 text-center">Kamyar <span className="text-teal-500">Mivehchi</span></h1>


                        <div className="flex flex-col gap-2 justify-center items-center">
                            <h2 className="  font-bold   lg:text-xl">{content.tagline}</h2>
                            <h2 className="  font-bold lg:text-xl">{content.tagline2}</h2>
                        </div>
                        <div className="flex flex-col gap-4 lg:flex-row">


                            <a href="#portfolio" >
                                <button className="btn   btn-accent text-lg  px-20 border-2 font-bold hover:animate-none  hover:bg-gradient-to-br hover:from-purple-400 hover:to-accent hover:scale-105 active:scale-95 transition-all duration-1000 ease-in-out animate-pulse" > Projects</button>
                            </a>
                            <a href="https://calendly.com/kammivehchi/tutoring-web-development">
                                <button className="btn   btn-primary    text-lg  px-20 border-2 font-bold hover:animate-none  hover:bg-gradient-to-br hover:from-purple-400 hover:to-accent hover:scale-105 active:scale-95 transition-all duration-1000 ease-in-out " >Tutoring</button>
                            </a>

                            {/* contact button and popup */}
                            <button

                                className="btn btn-outline btn-accent hover:bg-gradient-to-l hover:from-purple-400 hover:to-accent hover:scale-105 active:scale-95   transition-all duration-300 text-lg  px-20 border-2 font-bold ease-in-out w-min mx-auto " onClick={() => setOpenContact(!openContact)}>
                                Contact
                            </button>

                        </div>

                    </div>
                    <div className="flex gap-12">

                        {project.data.map((project, i) => {
                            return (

                                <a className={`w-48  h-72  bg-white rounded-xl overflow-hidden border-1 ${i % 2 ? "rotate-3" : "-rotate-3"} border-2 border-primary  shadow-white/30 shadow-xl relative after:content-[${project.title}] after:w-full after:h-full after:absolute after:bg-black`} href={`#${project.id}`} key={`hero_project_${i}`}  >
                                    <div className="absolute bg-accent/80 w-full h-full grid content-center text-center opacity-0 hover:opacity-100 transition-opacity duration-500 ">
                                        {project.title}
                                        <button className="btn btn-primary btn-xs w-1/2 justify-self-center flex justify-center gap-2">
                                            <BsDisplay />
                                            View
                                        </button>
                                    </div>
                                    <LazyLoadImage src={project.screenshot} alt={project.title} className="object-cover" height="288px" width="192px" />
                                </a>

                            )
                        })}
                    </div>
                </div>
                <Contact openContact={openContact} setOpenContact={setOpenContact} />


            </div >
        </>

    )
}

export default Hero