import React from 'react'
import { Parallax } from 'react-scroll-parallax';

import content from '../content/index'

function Project({ proj, index, total }) {
   return (

      < div className={`${index === 0 ? 'mt-4 lg:mt-12' : ''} p-12 grid grid-cols-1 gap-2 lg:gap-4 lg:gap-x-12 relative md:w-10/12 2xl:w-2/3 lg:grid-cols-2 grid-flow-dense md:mx-auto   ${index < total - 1 ? `after:absolute  after:bottom-[-.5rem] after:left-1/2 after:translate-x-[-50%] after:content-[""] after:w-6/12 after:h-1 after:bg-gradient-to-r  ${index % 2 == 0 ? "after:from-accent after:to-white" : "after:from-white after:to-accent"} after:mx-auto after:rounded-full  lg:after:bottom-[-1.5rem]` : ''} `} >
         {/* title */}
         <h1 className={`text-white text-4xl font-bold lg:row-start-1  ${index % 2 == 0 ? "lg:col-start-1" : "lg:col-start-2"}`}>{proj.title}</h1>
         {/* site/repo links */}
         <div class={`card-actions text-white  ${index % 2 == 0 ? "lg:col-start-1" : "lg:col-start-2"}`} >
            <button className="btn btn-xs lg:btn-sm btn-accent  ">
               <a href={proj.git} target='_blank' className='flex gap-1' rel="noopener noreferrer">
                  <p>
                     Github Repo
                  </p>
                  {content.project.icons.git}
               </a>
            </button>
            <button className="btn btn-xs lg:btn-sm btn-accent ">
               <a href={proj.git} target='_blank' className='flex gap-1' rel="noopener noreferrer">
                  <p>Deployed Site </p>
                  {content.project.icons.production}
               </a>
            </button>
         </div>
         {/* image/gif */}
         <div className={`lg:row-span-5 lg:row-start-1 lg:row-start-1 ${index % 2 == 0 ? " lg:col-start-2" : " lg:col-start-1"} 
         `} >
            <div className=" border-2 border-white mx-auto rounded-xl overflow-hidden shadow-2xl shadow-white/30">

               <div >
                  <img className="object-fill w-full" src={proj.img} alt="" />
               </div>
            </div>

         </div>
         {/* tech badges */}
         <div class={`card-actions justify-start my-2  ${index % 2 == 0 ? "lg:col-start-1" : "lg:col-start-2"}`}>
            {proj.tech.map((skill, i) => <div key={`${proj}_skill_${i}`} class=" badge badge-accent badge-outline ">{skill}</div>)}
         </div>
         {/* description */}
         <p className={`text-white   lg:col-start-1${index % 2 == 0 ? " lg:col-start-1" : "lg:col-start-2"} xl:text-lg`}>{proj.desc}</p>
      </div >



   )
}

export default Project