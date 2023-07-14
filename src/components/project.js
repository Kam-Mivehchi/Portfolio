import React from 'react'


import content from '../content/index'
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
function Project({ proj, index, total, scrollPosition }) {
   return (

      < div className={`${index === 0 ? 'mt-4 lg:mt-12' : ''} p-4 lg:p-12 grid grid-cols-1 gap-2 lg:gap-4 lg:gap-x-12  relative md:w-10/12 2xl:w-2/3 lg:grid-cols-2 grid-flow-dense md:mx-auto   ${index < total - 1 ? `after:absolute  after:bottom-[-.5rem] after:left-1/2 after:translate-x-[-50%] after:content-[""] after:w-6/12 after:h-1 after:bg-gradient-to-r  ${index % 2 === 0 ? "after:from-accent after:to-white" : "after:from-white after:to-accent"} after:mx-auto after:rounded-full  lg:after:bottom-[-1.5rem]` : ''}  `} id={proj.id}>
         {/* title */}
         <h1 className={`text-white text-4xl font-bold lg:row-start-1 mx-auto lg:mx-0  ${index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"}`}>{proj.title}</h1>
         {/* site/repo links */}
         <div className={`card-actions text-white mx-auto lg:mx-0 ${index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"}`} >
            <a href={proj.git} target='_blank' className='flex gap-1 btn btn-xs lg:btn-sm btn-accent  hover:bg-gradient-to-r hover:from-purple-400 hover:to-accent hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out ' rel="noopener noreferrer">
               <p>
                  Github Repo
               </p>
               {content.project.icons.git}
            </a>

            <a href={proj.live} target='_blank' className='flex gap-1 btn btn-xs lg:btn-sm btn-accent  hover:bg-gradient-to-l hover:from-purple-400 hover:to-accent hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out' rel="noopener noreferrer">
               <p>Deployed Site </p>
               {content.project.icons.production}
            </a>

         </div>
         {/* image/gif */}
         <div className={`lg:row-span-5  lg:row-start-1   ${index % 2 === 0 ? " lg:col-start-2" : " lg:col-start-1"} 
         `} >
            <div className=" border-2 border-white mx-auto rounded-xl overflow-hidden shadow-2xl shadow-white/30">

               <div >
                  <LazyLoadImage className="" src={proj.video} alt={proj.title} loading="lazy" />
               </div>
            </div>

         </div>
         {/* tech badges */}
         <div className={`card-actions justify-start my-2  ${index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"} flex justify-center lg:justify-start`}>
            {proj.tech.map((skill, i) =>
               <div key={`${proj.id}_skill_${i}`} className={`p-[2px] w-max ${i % 2 === 0 ? "bg-gradient-to-br" : "bg-gradient-to-bl"} from-purple-400 via-accent to-purple-400 rounded-full flex shadow-md shadow-white/30`}><div className=" badge badge-accent bg-black border-0 text-white ">{skill}</div></div>)}
         </div>
         {/* description */}
         <p className={`text-white  text-center lg:text-left lg:col-start-1${index % 2 === 0 ? " lg:col-start-1" : "lg:col-start-2"} xl:text-lg`}>{proj.desc}</p>
      </div >



   )
}

export default trackWindowScroll(Project)