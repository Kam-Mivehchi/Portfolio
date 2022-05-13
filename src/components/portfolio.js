
import { Parallax } from 'react-scroll-parallax';
import { BiLinkExternal } from 'react-icons/bi'
import content from '../content/index'


const Portfolio = () => {


    return (
        <>
            <Parallax opacity={[2, -1]}  >
                <h1 className=" text-4xl md:text-8xl font-bold text-gray-600 text-center pt-8 mb-8 lg:-mb-10">Projects</h1>
            </Parallax>

            {content.project.data.map((proj, index) => {
                return (
                    <>
                        {/* layout for large desktops */}
                        <div className="overflow-hidden  hidden lg:grid lg:grid-cols-2" style={{ minHeight: '90vh' }}>

                            <div className={`${index % 2 === 0 ? '' : 'order-2'} flex flex-col items-center justify-center`}>
                                <Parallax translateX={index % 2 === 0 ? ['20%', '0%'] : ['-100%', '20%']}
                                    opacity={[1, 0]}
                                    speed={-10}>
                                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : "flex-row-reverse gap-4"}`}>

                                        <h1 className=" text-white lg:text-5xl 2xl:text-6xl font-bold">
                                            {proj.title}
                                        </h1>

                                        <Parallax translateX={index % 2 === 0 ? ['10%', '100%'] : ['10%', '-150%']}
                                            speed={0}>

                                            <div class="card-actions   text-accent ">
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
                                        </Parallax>

                                    </div>
                                </Parallax>


                                <Parallax translateX={['0%', '25%']}>
                                    <p className="text-white text-xl lg:text-2xl xl:text-3xl text-left w-2/3">{proj.desc}</p>
                                    <div class="card-actions justify-right my-8">
                                        {proj.tech.map((skill) => <div class=" badge badge-accent badge-outline ">{skill}</div>)}
                                    </div>
                                </Parallax>

                            </div>


                            <div className="text-center">
                                <Parallax translateY={['100%', '0%']}
                                    speed={-80}
                                    opacity={[4, 0]}
                                    className='mx-8 '>

                                    <div className="mockup-window border bg-base-200 w-full hidden  lg:inline-block ">
                                        <div className='flex gap-3 absolute top-5 left-5'>
                                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                        </div>
                                        <div >
                                            <img className="" src={proj.img} alt="" />
                                        </div>
                                    </div>

                                </Parallax>
                            </div>
                        </div>


                        {/* Mobile design */}
                        <div className=" lg:hidden   overflow-hidden grid grid-rows-2 content-start pt-16 px-5 my-10"
                            style={{ minHeight: '50vh' }}>
                            <div className="md:w-full row-span-2">
                                <Parallax opacity={[2, 0]}
                                    className='flex'
                                >
                                    <h1 className="text-white text-4xl">{proj.title}</h1>
                                    <div class="card-actions text-white text-accent ">
                                        <button className="btn btn-ghost text-3xl">
                                            <a href={proj.git} target='_blank' rel="noopener noreferrer">
                                                <BiLinkExternal />
                                            </a>
                                        </button>
                                        <button className="btn btn-ghost -mx-6 text-3xl">
                                            <a href={proj.git} target='_blank' rel="noopener noreferrer">
                                                {content.footer.externLinks[1].icon}
                                            </a>
                                        </button>
                                    </div>
                                </Parallax>

                                <p className="text-white w-2/3 ">{proj.desc}</p>
                                <div class="card-actions justify-end my-2 w-11/12 mx-auto">
                                    {proj.tech.map((skill) => <div class=" badge badge-accent badge-outline ">{skill}</div>)}
                                </div>

                                <Parallax opacity={[0, 3]} >
                                    <div className="mt-8  ">
                                        <div className="mockup-window border bg-base-300 mx-auto w-5/6">
                                            <div className='flex gap-3 absolute top-5 left-5'>
                                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                            </div>
                                            <div >
                                                <img className="" src={proj.img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </Parallax>

                            </div>

                        </div>


                    </>
                )
            })
            }
        </>
    )
}

export default Portfolio