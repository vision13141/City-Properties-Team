import React from 'react'
import Container from '../Component/Container'
import Work_one from '../assets/Image/work_one.jpg'
import Work_two from '../assets/Image/work_two.jpg'
import Work_three from '../assets/Image/work_three.jpg'
import Work_four from '../assets/Image/work_four.jpg'
import Work_five from '../assets/Image/work_five.jpg'
import Image from '../Component/Image'
import { CiSearch } from "react-icons/ci";

import BlogPageCard from '../Component/BlogPageCard'
import RecentCard from '../Component/RecentCard'

const BlogPage = () => {
    return (
        <section className='py-10'>

            <div className="h-[200px] bg-blue bg-opacity-90 text-center relative overflow-hidden hover:bg-opacity-90 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
                <h3 className='text-white text-Nunito font-bold leading-6 text-5xl pt-14 relative z-10 hover:scale-105 transition-transform duration-300'>Blog</h3>
                <h4 className='text-white text-Nunito font-medium leading-6 text-lg pt-7 italic relative z-10 hover:text-blue-200 transition-colors duration-300'>Our all News feed</h4>
            </div>

            <div className="">
                <Container>
                    <div className="flex justify-between relative">

                        <div className="">
                            <BlogPageCard />
                            <BlogPageCard />
                        </div>

                        <div className="ml-32 sticky right-0 top-0">
                            <div className="w-[400px] mt-20 relative border-black border rounded-full">
                                <div className="relative">
                                    <input
                                        type="search"
                                        placeholder="Search..."
                                        className="w-full py-4 px-12 rounded-full border bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300 ease-in-out hover:shadow-lg"
                                    />
                                    <CiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-xl" />
                                </div>
                            </div>
                            {/* 2nd part */}
                            <div className="mt-4 rounded-xl w-[400px]">
                                <div className="mb-4">
                                    <h3 className='text-black text-Nunito font-bold leading-6 text-2xl pt-7 pl-3'>Recent Project</h3>
                                </div>
                                <div className='border-b border-gray-600'></div>
                                <div className="">
                                    <div className="mt-8"><RecentCard /></div>
                                    <div className="mt-8"><RecentCard /></div>
                                    <div className="mt-8"><RecentCard /></div>
                                    <div className="mt-8"><RecentCard /></div>

                                </div>
                            </div>
                        </div>

                    </div>



                </Container>
            </div>
        </section>
    )
}

export default BlogPage