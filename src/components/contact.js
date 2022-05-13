import React from 'react'
import { useState } from 'react'
const Contact = () => {
    const [openContact, setOpenContact] = useState(false)

    return (
        <div className="  ">
            <section className="text-white  body-font ">

                <button style={{ zIndex: '999' }}
                    onClick={() => openContact ? setOpenContact(false) : setOpenContact(true)}
                    className="btn btn-outline btn-accent fixed  top-3 right-12  hover:transition-colors  ease-in-out  hover:bg-gradient-to-b from-accent via-teal-600 to-accent  hover:scale-110 duration-900 " >
                    Contact
                </button>

                <div className={`container fixed bottom-5 right-12 mx-auto flex fixed bottom-0 right-0 ${openContact ? "" : 'hidden'} `} style={{ zIndex: '999' }}>
                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0  shadow-md">

                        <button className=" absolute btn hover:btn-accent  right-5 top-2" onClick={() => openContact ? setOpenContact(false) : setOpenContact(true)}>X</button>

                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Me</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Please Leave you a short message and email</p>
                        <p className="text-sm text-red-500 my-3">Contact Form Currently Unavailable, please email me directly at <a className="text-blue-400 border-b border-blue-400   " href="mailto:kammivehchi@gmail.com">kammivehchi@gmail.com</a></p>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white btn btn-accent border-0 py-2 px-6  hover:bg-gray-900 rounded text-lg  ease-in-out   hover:scale-110 duration-900">Button</button>
                        <p className="text-sm text-red-500 mt-3">Contact Form Currently Unavailable, please email me directly at <a className="text-blue-400 border-b border-blue-400   " href="mailto:kammivehchi@gmail.com">kammivehchi@gmail.com</a></p>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Contact