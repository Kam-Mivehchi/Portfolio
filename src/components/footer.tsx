
import content from '../content/index';





const Footer = () => {


    return (
        <>
            <footer className="footer footer-center py-10 bg-black  text-white font-bold rounded z-100 text-base ">
                <h1 className="text-4xl text-gray-700">{content.footer.tagline}</h1>
                <div className="grid grid-flow-col gap-max">
                    {content.nav.links.map(items => {
                        if (items.text === "Resume") {
                            return (
                                <a key={items.text
                                } className="link link-hover link-accent" target='_blank'

                                    rel="noopener noreferrer" href={items.link} > {items.text} </a>
                            )
                        }

                        return (

                            <a href={`#${items.link}`} key={`${items.text}_footer`} >
                                <div className="link link-hover link-accent">{items.text}</div>
                            </a>
                        )
                    })}
                    <a className="link link-hover link-accent" target='_blank'

                        rel="noopener noreferrer" href='https://gallant-curie-2070df.netlify.app/'> Old Portfolio </a>



                </div>
                <div>
                    <div className="grid grid-flow-col gap-4 text-accent/50">
                        {content.footer.externalLinks.map(items => {
                            return (

                                <a className="btn btn-ghost text-4xl" target='_blank'
                                    rel="noopener noreferrer" href={items.link} key={items.link}>{items.icon} </a>
                            )
                        })}


                    </div>
                </div>
                <div>
                    <p className="text-base">{content.footer.copyright}</p>
                </div>
            </footer >
        </>
    );
}



export default Footer