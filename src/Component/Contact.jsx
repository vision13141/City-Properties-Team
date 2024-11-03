import React from 'react'
import Container from './Container'
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";




const Contact = () => {
    return (
        <div className=''>
            <Container className={`flex justify-between p-[75px] bg-[#dee2fc] rounded-2xl mt-[30px]`}>

                <div className="w-[45%] flex flex-col justify-center">
                    <h2 className="text-4xl font-bold font-Nunito mb-6 text-left text-black">Contact Us</h2>
                    <p className='pr-[40px] font-Nunito text-[18px] text-black' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore similique maiores ratione voluptatum suscipit nam nostrum distinctio iure vitae temporibus?</p>

                    <div className="flex gap-7 mt-[35px]">

                        <div className=" bg-white w-[50px] h-[50px] flex justify-center items-center rounded-full">
                            <FaWhatsapp className='text-[#24CC63] text-[1.4vw]' />
                        </div>
                        <div className=" bg-white w-[50px] h-[50px] flex justify-center items-center rounded-full">
                            <SiGmail className='text-red-500 text-[1.4vw]' />
                        </div>
                        <div className="bg-white w-[50px] h-[50px] flex justify-center items-center rounded-full">
                            <IoLogoLinkedin className='text-sky-600 text-[1.4vw]' />
                        </div>
                    </div>
                </div>

                <div className="w-[55%] bg-[#FFF] shadow-2xl rounded-lg">
                    <form className=" shadow-md rounded-lg p-8 flex flex-col gap-3 ">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-black">First Name</label>
                                <input
                                    type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm outline-blue py-2 pl-3 italic" placeholder='First Name' />
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-black">Last Name</label>
                                <input type="name" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm outline-blue py-2 pl-3 italic" placeholder='Last Name' />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                            <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm outline-blue py-2 pl-3 italic" placeholder='Your Email' />
                        </div>

                        <div className="mt-6">
                            <label htmlFor="message" className="block text-sm font-medium text-black">Message</label>
                            <textarea placeholder='Your message here' id="message" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  outline-blue py-2 pl-3 italic" ></textarea>
                        </div>

                        <div className="mt-6 bg-blue rounded-md border-[2px] border-gray-300">
                            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700">Send Message</button>
                        </div>
                    </form>
                </div>
            </Container >
        </div >
    )
}

export default Contact