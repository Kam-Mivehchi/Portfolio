import { Link } from 'react-scroll'
import content from '../content/index';


function Navigation() {


    return (

        <div className="navbar bg-transparent md:w-10/12 2xl:w-2/3 mx-auto pt-4 lg:pt-10">
            <Link to='hero' smooth={true} offset={-50} className="navbar-start">

                <h2 className=" btn btn-wide flex btn-ghost normal-case text-2xl lg:text-3xl font-bold   text-white  w-max hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-purple-400 hover:to-accent hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out">{content.nav.firstName} <span className="text-accent ml-1">{content.nav.lastName}</span></h2>

            </Link>
            <div className="navbar-end">
                <div className="dropdown  dropdown-end ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {content.nav.links.map((item) => {
                            if (item.text === "Resume") {
                                return (
                                    <a className="btn btn-ghost w-full font-black" target='_blank'
                                        rel="noopener noreferrer" key={`${item.text}_mobile`} href={item.link}>{item.text} </a>
                                )
                            }
                            return (
                                <Link to={item.link} key={`${item.text}_mobile`} smooth={true} offset={25}>
                                    <div className="btn btn-ghost w-full font-black">{item.text}</div>
                                </Link>
                            )
                        })}

                    </ul>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex text-white ">
                <ul className="menu menu-horizontal px-1 ">
                    {content.nav.links.map((item) => {
                        if (item.text === "Resume") {
                            return (
                                <a className="btn btn-ghost w-max font-black text-xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-purple-400 hover:to-accent hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out" target='_blank'
                                    rel="noopener noreferrer" key={`${item.text}_desktop`} href={item.link}>{item.text} </a>
                            )
                        }
                        return (
                            <Link to={item.link} key={`${item.text}_desktop`} smooth={true} offset={25}>

                                <button className="btn btn-ghost w-max font-black text-xl  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-purple-400 hover:to-accent hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out">{item.text}</button>
                            </Link>
                        )
                    })}

                </ul>
            </div>

        </div>


    )

}

export default Navigation