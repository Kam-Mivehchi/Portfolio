import content from '../content/index'
import React, { lazy } from 'react';

const Project = lazy(() => import('./project'))

const Portfolio = () => {
    return (
        <section className="pt-6 pb-14" id="portfolio">

            <h1 className="text-6xl lg:text-8xl  font-bold   text-teal-500 text-center ">Projects</h1>
            <div className="flex flex-col gap-2 lg:gap-12">

                {content.project.data.map((proj, index) => {
                    return (<Project proj={proj} index={index} total={content.project.data.length} key={`${proj.title}_${index}`} />)
                })
                }
            </div>
        </section>
    )
}

export default Portfolio