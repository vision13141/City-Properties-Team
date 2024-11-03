import Container from './Container'
import Image from './Image'
import Ab1 from '../assets/Image/ab1.png'
import Ab2 from '../assets/Image/ab2.png'
import Ab3 from '../assets/Image/ab3.png'
import Ab4 from '../assets/Image/ab4.png'
import Ab5 from '../assets/Image/ab5.png'
import Ab6 from '../assets/Image/ab6.png'
import { FaArrowRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom'
const AboutUs = () => {
    return (
        <section className='mt-[127px] pb-[10vw]'>
            <Container>
                <div>
                    <p className='text-center font-Nunito font-bold text-blue text-base'>ABOUT US</p>
                    <h2 className='text-center font-Nunito font-bold text-[40px] ml-64 mr-52'>Buying or Rent Homey it’s Very Easy. Just like Click, Search & Find </h2>
                </div>

                <div className='flex justify-center mt-[60px]'>
                    <div className="w-[570px] relative">
                        <Image src={Ab1} className="" />
                        <Image src={Ab2} className='absolute left-[370px] top-[240px]' />
                        <Image src={Ab3} className="absolute left-[190px] top-[370px]" />
                    </div>

                    <div className="w-[470px] mt-[124px] mx-[83px]">
                        <div>
                            <h1 className='font-Nunito font-bold text-[25px] leading-10 pr-[120px]'>We live on Digital Era 4.0. We can help you in Our Expertise about Homey</h1>
                            <p className='mt-[30px] font-Nunito text-base text-[#6A6A6A] leading-6 pr-3'>Listing more than one? Enjoy full control over your advertisements, manage your entire space. Once you list a property on our platform, you only have to sit back and watch the world want it.
                            </p>
                            <p className='mt-[40px] font-Nunito text-base text-[#6A6A6A] leading-[26px] '>If you’re looking for a real estate service that will operate as an extension to your family - stay with </p>
                            <span className='font-Nunito text-base text-[#6A6A6A] leading-[26px] inline-block'>us and see!</span>
                        </div>
                        <Link to={`/Properties`} className='flex font-Nunito font-bold text-base text-white border rounded-full py-3 w-[280px] justify-center mt-[35px] bg-blue '>See How We Work <FaArrowRight className='mt-1 w-[24px] ml-3' /></Link>
                    </div>

                </div>

                <div className='flex mt-[140px] '>
                    <div className="w-[470px] mt-[345px] mx-[83px]">
                        <div>
                            <h1 className='font-Nunito font-bold text-[25px] leading-20 pr-[140px]'>Transparent Commission and Payment under Our Trusted License</h1>
                            <p className='mt-[30px] font-Nunito text-base text-[#6A6A6A] leading-6 pr-16'>When your Homey Sold, Buyed or Booked with new Guest. You may to have 50% Commission based or Budget Deals. So, Don’t Worry brother:)
                            </p>
                            <div className="flex mt-[35px]">
                                <div className='flex'>
                                    <TiTick className='w-[20px] mt-1 text-[#36B37E]' /><p className='font-Nunito font-normal px-3'>100% Trusted</p>
                                </div>
                                <div className='flex pl-[92px]'>
                                    <TiTick className='w-[20px] mt-1 text-[#36B37E]' /><p className='font-Nunito font-normal px-3'>Customer Support 24/7</p>
                                </div>


                            </div>
                            <div className="flex mt-[35px]">
                                <div className='flex'>
                                    <TiTick className='w-[20px] mt-1 text-[#36B37E]' /><p className='font-Nunito font-normal px-3'>Indomaret Support</p>
                                </div>
                                <div className='flex pl-[57px]'>
                                    <TiTick className='w-[20px] mt-1 text-[#36B37E]' /><p className='font-Nunito font-normal px-3'>Get paid quickly</p>
                                </div>
                            </div>
                            <div className='flex mt-[35px]'>
                                <TiTick className='w-[20px] mt-1 text-[#36B37E]' /><p className='font-Nunito font-normal px-3'>LinkAja or Ovo. Bebas</p>
                            </div>
                        </div>

                    </div>
                    <div className="w-[570px] mt-[150px] relative">
                        <Image src={Ab4} className="ml-52" />
                        <Image src={Ab5} className='absolute left-[40px] top-[270px]' />
                        <Image src={Ab6} className="absolute left-[170px] top-[420px]" />

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AboutUs