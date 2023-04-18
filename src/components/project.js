import React from 'react'
import { Parallax } from 'react-scroll-parallax';

import content from '../content/index'

function Project({ proj, index, total }) {
   return (
      <>
         {/* <div className="overflow-hidden  hidden lg:grid lg:grid-cols-2" style={{ minHeight: '90vh' }}>

            <div className={`${index % 2 === 0 ? '' : 'order-2'} flex flex-col items-center justify-center`}>
               {/* <Parallax translateX={index % 2 === 0 ? ['20%', '0%'] : ['-100%', '20%']}
                                        opacity={[1, 0]}
                                        speed={-10}>
                                            </Parallax> */}
         {/* <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : "flex-row-reverse gap-4"}`}>

            <h1 className=" text-white lg:text-5xl 2xl:text-6xl font-bold">
               {proj.title}
            </h1>

            {/* <Parallax translateX={index % 2 === 0 ? ['10%', '100%'] : ['10%', '-150%']}
                                                speed={0}>
                                            </Parallax> */}

         {/* <div class="card-actions   text-accent ">
            <button className="btn btn-ghost  text-4xl " >
               <a href={proj.live} target='_blank' rel="noopener noreferrer">
                  <BiLinkExternal />
               </a>
            </button>
            <button className="btn btn-ghost text-4xl" >
               <a href={proj.git} target='_blank' rel="noopener noreferrer">
                  {content.footer.externLinks[1].icon}
               </a>
            </button>
         </div>

      </div > * /} */ }
         {/* } */}


         {/* <Parallax translateX={['0%', '25%']}>
                                    </Parallax> */}
         {/* <p className="text-white text-xl lg:text-2xl xl:text-3xl text-left w-2/3">{proj.desc}</p>
         <div class="card-actions justify-right my-8">
            {proj.tech.map((skill) => <div class=" badge badge-accent badge-outline ">{skill}</div>)}
         </div>

      </div > */}


         {/* <div className="text-center"> */}
         {/* <Parallax translateY={['100%', '0%']}
                                        speed={-80}
                                        opacity={[4, 0]}
                                        className='mx-8 '>
                                    </Parallax> */}

         {/* <div className="mockup-window border bg-base-200 w-full hidden  lg:inline-block mx-8">
               <div className='flex gap-3 absolute top-5 left-5'>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
               </div>
               <div >
                  <img className="" src={proj.img} alt="" />
               </div>
            </div>

         </div> */}
         {/* </div > */}


         {/* Mobile design */}
         < div className={`${index === 0 ? 'mt-4' : ''} p-4 flex flex-col gap-2 relative ${index < total - 1 ? 'after:content-[""] after:w-6/12 after:h-1 after:bg-white after:mx-auto after:rounded-full after:mt-6' : ''}`} >

            {/* <Parallax opacity={[2, 0]}
                                        className='flex'
                                        >
                                        </Parallax> */}


            <h1 className="text-white text-4xl font-bold">{proj.title}</h1>




            <div class="card-actions text-white  ">
               <button className="btn btn-xs  btn-accent  ">
                  <a href={proj.git} target='_blank' className='flex gap-1' rel="noopener noreferrer">
                     <p>
                        Github Repo
                     </p>
                     {content.project.icons.git}
                  </a>
               </button>
               <button className="btn btn-xs  btn-accent ">
                  <a href={proj.git} target='_blank' className='flex gap-1' rel="noopener noreferrer">
                     <p>Deployed Site </p>
                     {content.project.icons.production}
                  </a>
               </button>
            </div>
            <div className="  ">
               <div className="mockup-window border bg-base-400 mx-auto ">
                  <div className='flex gap-3 absolute top-5 left-5 m-0'>
                     <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                     <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                     <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                  <div >
                     <img className="" src={proj.img} alt="" />
                  </div>
               </div>

            </div>
            <div class="card-actions justify-start my-2  mx-auto">
               {proj.tech.map((skill, i) => <div key={`${proj}_skill_${i}`} class=" badge badge-accent badge-outline ">{skill}</div>)}
            </div>

            <p className="text-white  ">{proj.desc}</p>


            {/* <Parallax opacity={[0, 3]} >
                                    </Parallax> */}


         </div >


      </>
   )
}

export default Project