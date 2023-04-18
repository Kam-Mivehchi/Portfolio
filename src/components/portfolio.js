
import { Parallax } from 'react-scroll-parallax';
import { BiLinkExternal } from 'react-icons/bi'
import content from '../content/index'
import { Link, Element } from 'react-scroll'
import Project from './project'
const Portfolio = () => {


    return (
        <section className="pt-6 pb-14">
            {/* <Parallax opacity={[2, -1]}  >
            </Parallax> */}
            <Link to='project' smooth={true} offset={-50}>
                <h1 className="text-6xl lg:text-8xl  font-bold   text-teal-500 text-center ">Projects</h1>
            </Link>
            <Element name='project' className="flex flex-col gap-2 lg:gap-12">

                {content.project.data.map((proj, index) => {
                    return (
                        <>
                            {/* layout for large desktops */}
                            <Project proj={proj} index={index} total={content.project.data.length} />


                        </>
                    )
                })
                }
            </Element>
        </section>
    )
}

export default Portfolio