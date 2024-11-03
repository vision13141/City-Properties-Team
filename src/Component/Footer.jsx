import React from "react";
import Container from "./Container";
import Image from "./Image";
import Logo from "../assets/Image/footlogo.png";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import List from "./List";
const Footer = () => {
    return (
        <section className='mt-[150px] mb-[120px]'>
            <Container>
                <div className='flex gap-x-[160px]'>
                    <div className="w-[265px]">
                        <Image src={Logo} className='top-0' />
                        <p className="text-[16px] text-paraColor pt-[28px] pr-10">Build a modern and creative website with crealand</p>
                        <div className='flex mt-[35px] gap-x-2'>
                            <button type='#' className="p-2 rounded-full text-gray-600 bg-[#EFF1F3]">
                                <FaGoogle className='text-[20px] text-paraColor' />
                            </button>
                            <button type='#' className="p-2 rounded-full text-gray-600 bg-[#EFF1F3]">
                                <FaTwitter className='text-[20px] text-paraColor' />
                            </button>
                            <button type='#' className="p-2 rounded-full text-gray-600 bg-[#EFF1F3]">
                                <FaInstagram className='text-[20px] text-paraColor' />
                            </button>
                            <button type='#' className="p-2 rounded-full text-gray-600 bg-[#EFF1F3]">
                                <FaLinkedin className='text-[20px] text-paraColor' />
                            </button>

                        </div>
                    </div>
                    <div className='flex mt-3'>
                        <div className='w-[130px] '>
                            <p className='font-bold text-[18px] pb-[35px]'>Products</p>
                            <ul>
                                <List href='#' text='Landingpage' className='pb-5' />
                                <List href='#' text='Features' className='pb-5' />
                                <List href='#' text='Documentation' className='pb-5' />
                                <List href='#' text='Referral Program' className='pb-5  text-[16px]' />
                                <List href='#' text='Pricing' className='' />
                            </ul>
                        </div>
                        <div className='w-[117px] ml-[100px]'>
                            <p className='font-bold text-[18px] pb-[35px]'>Services</p>
                            <ul>
                                <List href='#' text='Documantation' className='pb-5' />
                                <List href='#' text='Design' className='pb-5' />
                                <List href='#' text='Themes' className='pb-5' />
                                <List href='#' text='Illustrations' className='pb-5' />
                                <List href='#' text='UI Kit' className='pb-5' />
                            </ul>
                        </div>
                        <div className='w-[101px] ml-[100px]'>
                            <p className='font-bold text-[18px] pb-[35px]'>Company</p>
                            <ul>
                                <List href='#' text='About' className='pb-5' />
                                <List href='#' text='Terms' className='pb-5' />
                                <List href='#' text='Privacy Policy' className='pb-5' />
                                <List href='#' text='Careers' className='pb-5' />
                            </ul>
                        </div>
                        <div className='w-[117px] ml-[100px]'>
                            <p className='font-bold text-[18px] pb-[35px]'>More</p>
                            <ul>
                                <List href='#' text='Documantation' className='pb-5' />
                                <List href='#' text='License' className='pb-5' />
                                <List href='#' text='Changelog' className='pb-5' />
                            </ul>
                        </div>


                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Footer;
