
import content from '../content/index';

import { Link } from 'react-scroll'



const Footer = () => {


    return (
        <>
            <footer className="footer footer-center p-10 bg-black  text-white font-bold rounded z-100 text-base">
                <h1 className="text-6xl text-gray-700">{content.footer.tagline}</h1>
                <div className="grid grid-flow-col gap-16">
                    {content.nav.links.map(items => {
                        if (items.text === "Resume") {
                            return (
                                <a className="link link-hover" target='_blank'

                                    rel="noopener noreferrer" href={items.link}>{items.text} </a>
                            )
                        }

                        return (

                            <Link to={items.link} smooth={true} offset={-50}>
                                <div className="link link-hover">{items.text}</div>
                            </Link>
                        )
                    })}



                </div>
                <div>
                    <div className="grid grid-flow-col gap-4 text-accent/50">
                        {content.footer.externLinks.map(items => {
                            return (

                                <a className="btn btn-ghost text-4xl" target='_blank'
                                    rel="noopener noreferrer" href={items.link}>{items.icon} </a>
                            )
                        })}


                    </div>
                </div>
                <div>
                    <p className="text-base">{content.footer.copyright}</p>
                </div>
            </footer>
        </>
    );
}


// <footer className="page-footer font-small bg-info pt-4">

//     <div className="container-fluid text-center text-md-left">

//         <div className="row ">
//             <div className="col-md-6   d-flex flex-column justify-content-between">
//                 <div>

//                     <h5 className="text-uppercase  ">{content.footer.tagline}</h5>
//                 </div>
//                 <div className="h-100 d-flex justify-content-center align-items-center">

//                     <p className="">{content.nav.logo}</p>
//                 </div>
//             </div>

//             <hr className="clearfix w-100 d-md-none pb-0" />
//             <div className="col-md-3 mb-md-0 mb-3  ">
//                 <h5 className="text-uppercase">Contact</h5>
//                 <ul className="list-unstyled mt-5">
//                     <li><h6>{content.footer.contact.name}</h6></li>
//                     <li><p>{content.footer.contact.location}</p></li>

//                     <li><a href={`mailto:${content.footer.contact.email}`}>{content.footer.contact.email}</a></li>


//                 </ul>
//             </div>
//             <div className="col-md-3 mb-md-0 mb-3 ">
//                 <h5 className="text-uppercase ">Project Live Links</h5>
//                 <ul className="list-unstyled ">
//                     {content.project.data.map((item) => {
//                         return <li><a className="span-2" href={item.live}>{item.title}</a></li>
//                     })}

//                 </ul>
//             </div>


//         </div>

//     </div >
//     <div className=" gap-4 d-flex py-4 justify-content-center ">
//         {content.footer.externLinks.map((items) => {
//             return <a href={items.link}>{items.icon}</a>
//         })}
//     </div>
//     <div className="footer-copyright text-center py-3 bg-secondary">© 2022 Copyright:
//         <a href="https://kamyarmivehchi.com/">Kamyarmivehchi.com</a>
//     </div>

// </footer >

export default Footer