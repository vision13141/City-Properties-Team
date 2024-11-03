
import React from 'react'
import Image from './Image'
import Work_one from '../assets/Image/work_one.jpg'
import { FaEye, FaComments } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";


const BlogPageCard = ({ src, className, h3text, ptext, h4text }) => {
    return (
        <div className="w-[670px] mt-14">
            <div className='w-[750px] h-[35vw] bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className="overflow-hidden rounded-xl">
                    <Image src={Work_one} className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex justify-start gap-x-8 py-5">
                    <div className="flex items-center gap-2">
                        <FaEye className='text-blue text-lg' />
                        <span className="text-gray-600 font-Nunito">35 Views</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaComments className='text-blue text-lg' />
                        <span className="text-gray-600 font-Nunito">07 Comments</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdOutlineFavoriteBorder className='text-blue text-lg' />
                        <span className="text-gray-600 font-Nunito">13 Likes</span>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold font-Nunito text-gray-800 hover:text-blue transition-colors duration-300">
                        Homeownership starts satisfaction Experience Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda.
                    </h3>
                    <p className='text-gray-600 font-Nunito leading-relaxed'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aliquam incidunt! Iste, voluptatibus, ratione quam eius laboriosam impedit commodi nam earum architecto dolores voluptates accusamus provident distinctio culpa, cupiditate esse.
                    </p>
                </div>
                <div className="mt-6 border-t border-gray-200 pt-6">
                    <button className='px-7 py-3 bg-blue text-white rounded-full border border-blue hover:border-blue hover:bg-[#EDEFFE] hover:text-blue transition-all duration-300 font-Nunito font-medium'>
                        Read More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BlogPageCard
