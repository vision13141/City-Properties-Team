import React, { useContext } from 'react'
import Hero from '../Component/Hero'
import SlidePart from '../Component/SlidePart'
import AboutUs from '../Component/AboutUs'
import WorkPart from '../Component/WorkPart'
import HappyClint from '../Component/HappyClint'
import Properties from '../Component/Properties'
import CounterUp from '../Component/CounterUp'
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    WhatsappShareButton,
    TelegramShareButton,
    TwitterShareButton,
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    WhatsappIcon,
    TelegramIcon,
    TwitterIcon,
} from "react-share";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import OrgContext from '../Context/OrgContext'


const Home = () => {

    const { share, shareClose } = useContext(OrgContext)
    return (
        <div>

            {
                share ?
                    <div className="fixed bg-white rounded-xl top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-[400px] py-4 h-[24vw] border shadow-2xl rounded-xl relative">
                            <h2 className='font-Nunito font-bold border-b border-black border-opacity-20 pb-2 text-center text-[18px]'>Share</h2>
                            <IoClose onClick={shareClose} className='absolute right-5 top-4 text-2xl' />

                            <div className="px-6 flex items-center gap-2 bg-[#f4f4f4]">
                                <CiSearch className='text-[18px]' />
                                <input type="text" placeholder='Serach' className='text-[16px] w-full bg-transparent py-3' />
                            </div>

                            <div className="grid grid-cols-4 gap-3 pt-2 w-full px-5">
                                <div className="bg-gray-400 w-[4vw] h-[4vw] rounded-[50%] outline-none border-none">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBHIFuFM3IA0mhzKyGRkCFCvQF4sGZC_YgqA&s" alt="" className='w-full h-full rounded-full' />
                                </div>
                                <div className="bg-gray-400 w-[4vw] h-[4vw] rounded-[50%] outline-none border-none">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8vvAEabiwZaecWJeg9OmtyQSp4f3_owYbw&s" alt="" className='w-full h-full rounded-full' />
                                </div>
                                <div className="bg-gray-400 w-[4vw] h-[4vw] rounded-[50%] outline-none border-none">
                                    <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt="" className='w-full h-full rounded-full' />
                                </div>
                                <div className="bg-gray-400 w-[4vw] h-[4vw] rounded-[50%] outline-none border-none">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeI83tTvha8UjUO1q6xv1Wgnnfl6zq8XcnBw&s" alt="" className='w-full h-full rounded-full' />
                                </div>
                                <div className="bg-gray-400 w-[4vw] h-[4vw] rounded-[50%] outline-none border-none">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBHIFuFM3IA0mhzKyGRkCFCvQF4sGZC_YgqA&s" alt="" className='w-full h-full rounded-full' />
                                </div>
                                <div className="bg-gray-400 w-[4vw] h-[4vw] rounded-[50%] outline-none border-none">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8vvAEabiwZaecWJeg9OmtyQSp4f3_owYbw&s" alt="" className='w-full h-full rounded-full' />
                                </div>
                                <div className="bg-gray-400 w-[4vw] h-[4vw] rounded-[50%] outline-none border-none">
                                    <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt="" className='w-full h-full rounded-full' />
                                </div>
                                <div className="bg-gray-400 w-[4vw] h-[4vw] rounded-[50%] outline-none border-none">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeI83tTvha8UjUO1q6xv1Wgnnfl6zq8XcnBw&s" alt="" className='w-full h-full rounded-full' />
                                </div>
                                <div className="bg-gray-400 w-[4vw] h-[4vw] rounded-[50%] outline-none border-none">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBHIFuFM3IA0mhzKyGRkCFCvQF4sGZC_YgqA&s" alt="" className='w-full h-full rounded-full' />
                                </div>
                                <div className="bg-gray-400 w-[4vw] h-[4vw] rounded-[50%] outline-none border-none">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8vvAEabiwZaecWJeg9OmtyQSp4f3_owYbw&s" alt="" className='w-full h-full rounded-full' />
                                </div>
                                <div className="bg-gray-400 w-[4vw] h-[4vw] rounded-[50%] outline-none border-none">
                                    <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt="" className='w-full h-full rounded-full' />
                                </div>
                                <div className="bg-gray-400 w-[4vw] h-[4vw] rounded-[50%] outline-none border-none">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeI83tTvha8UjUO1q6xv1Wgnnfl6zq8XcnBw&s" alt="" className='w-full h-full rounded-full' />
                                </div>

                            </div>


                            <div className="flex justify-between bg-white py-4 border-t absolute bottom-0 w-full rounded-xl px-2">
                                <EmailIcon url='https://mail.google.com/mail/u/0/#inbox'
                                    quote={"https://mail.google.com/mail/u/0/#inbox"}
                                    hashtag='#email'
                                    className='w-[2.5vw] h-[2.5vw] rounded-[50%]'>
                                    <EmailIcon />
                                </EmailIcon>

                                <FacebookShareButton url='https://www.facebook.com/bugIllusion'
                                    quote={"https://www.facebook.com/bugIllusion"}
                                    hashtag='#facebook'
                                    className='w-[2.5vw] h-[2.5vw] rounded-[50%]'>
                                    <FacebookIcon className='w-[2.5vw] h-[2.5vw] rounded-[50%]' />
                                </FacebookShareButton>

                                <FacebookMessengerShareButton to='bugIllusion'>
                                    <FacebookMessengerIcon className='w-[2.5vw] h-[2.5vw] rounded-[50%]' />
                                </FacebookMessengerShareButton>

                                <WhatsappShareButton url='https://web.whatsapp.com/'
                                    quote={"https://www.facebook.com/bugIllusion"}
                                    hashtag='#whatsapp'>
                                    <WhatsappIcon className='w-[2.5vw] h-[2.5vw] rounded-[50%]' />
                                </WhatsappShareButton>

                                <TelegramShareButton
                                    title='hello friend'>
                                    <TelegramIcon className='w-[2.5vw] h-[2.5vw] rounded-[50%]' />
                                </TelegramShareButton>

                                <TwitterShareButton url='https://x.com/home?lang=en'
                                    quote="https://x.com/home?lang=en"
                                    title={"hello twitter"}
                                    hashtag='#twitter'>
                                    <TwitterIcon className='w-[2.5vw] h-[2.5vw] rounded-[50%]' />
                                </TwitterShareButton>
                            </div>
                        </div>
                    </div>
                    : false
            }
            <div className={share ? "opacity-50" : " opacity-100"}>
                <Hero />
                <SlidePart />
                <AboutUs />
                <Properties />
                <WorkPart />
                <HappyClint />
                <CounterUp />
            </div>
        </div>
    )
}

export default Home;
