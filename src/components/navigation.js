import { Link } from 'react-scroll'
import content from '../content/index';


function Navigation() {


    return (
        <>
            <div className="bg-fixed text-white bg-cover sticky top-0 z-10 drop-shadow-2xl w-full bg-gradient-to-r from-black via-gray-900 to-gray-900 "  >

                <div className="navbar     ">
                    <div className="navbar ">
                        <div className="dropdown ">

                            <label tabindex="0" className="btn btn-ghost  ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>

                            <div tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52">
                                {content.nav.links.map((item, idx) => {
                                    if (item.text === "Resume") {
                                        return (
                                            <a className="btn btn-ghost w-full font-black" target='_blank'
                                                rel="noopener noreferrer" href={item.link}>{item.text} </a>
                                        )
                                    }
                                    return (
                                        <Link to={item.link} smooth={true} offset={-50}>
                                            <div className="btn btn-ghost w-full font-black">{item.text}</div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                        <Link to='hero' smooth={true} offset={-50}>

                            <h2 className="btn hidden md:flex btn-ghost normal-case text-2xl font-bold italic  text-white  ">{content.nav.firstName} <span className="text-accent ml-1">{content.nav.lastName}</span></h2>
                            <h2 className="md:hidden btn btn-ghost normal-case font-bold text-2xl mx-2 italic  text-white ">K <span className="text-accent ">M</span></h2>
                        </Link>

                    </div>
                </div>
            </div >
            {/* <Contact /> */}
        </>
    )

}

export default Navigation