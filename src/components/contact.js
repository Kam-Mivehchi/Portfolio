import React from 'react'
import { useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import { ImSpinner2 } from 'react-icons/im'
const Contact = ({ open }) => {
    const [openContact, setOpenContact] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            setError(false)

            await emailjs.sendForm("service_mtc7c6c", "template_ugau5vp", form.current, "1AFKzcDD6oJGfCvL4")

            e.target.reset()

            setTimeout(() => {
                setLoading(false)
                setSuccess(true)
            }, 500)
        } catch (error) {
            setLoading(false)

            setError(true)
            setSuccess(false)

        }

    };
    return (
        <>
            <button

                className="btn btn-outline btn-accent hover:bg-gradient-to-l hover:from-purple-400 hover:to-accent hover:scale-105 active:scale-95   transition-all duration-300 text-lg  px-20 border-2 font-bold ease-in-out w-min mx-auto " onClick={() => setOpenContact(!openContact)}>
                Contact
            </button>
            <section className="absolute  top-1/2 translate-y-[-50%] left-11/12 translate-x-[2%] lg:left-[-17%] ">


                <form className={`container relative    w-11/12 lg:w-screen ${openContact ? "" : 'hidden'}  `} ref={form} onSubmit={sendEmail}>
                    <div className="lg:w-1/2  bg-white rounded-lg  p-8 flex flex-col md:ml-auto w-full  md:mt-0  shadow-md ">

                        <button className=" absolute btn btn-sm rounded bg-gray-300 text-black border-0 shadow-xl hover:btn-accent  right-5 top-2 w-2 h-2 " onClick={() => setOpenContact(!openContact)}>X</button>

                        <h2 className="text-gray-900 text-lg mb-1 font-bold title-font">Contact Me</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Please leave you a name, email,short and a short message.  </p>
                        <p className={`text-sm text-red-500 ${error ? "block" : "hidden"}`}>Something went wrong, please submit the form again, and if the problem persists email me directly at <a className="text-blue-400 border-b border-blue-400   " href="mailto:kammivehchi@gmail.com">kammivehchi@gmail.com</a></p>
                        <p className={`text-sm text-success ${success ? "block" : "hidden"}`}>Thank you for submitting you response. I'll be sure to get back to you as soon as possible </p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Full Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-xl shadow-black/10" required />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-xl shadow-black/10" required />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out shadow-xl shadow-black/10" required></textarea>
                        </div>
                        <button type="submit" className="text-white btn btn-accent border-0 py-2 px-6  hover:bg-gray-900 rounded text-lg  ease-in-out   hover:scale-110 duration-900 shadow-2xl shadow-black/10"><ImSpinner2 className={` animate-spin mx-2 ${loading ? "static" : "hidden"}`} />Submit</button>

                    </div>
                </form>

            </section>
        </>


    )
}

export default Contact