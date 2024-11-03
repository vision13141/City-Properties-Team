import React from 'react'
import Image from './Image'
import { GoDash } from "react-icons/go";
const WorkCardTwo = ({ src, className, h3text, atext, ptext }) => {
    return (
        <div className=' w-[550px] bg-white shadow-2xl rounded-lg'>
            <div className="relative">
                <Image src={src} className={`w-[550px] h-[372px] rounded-xl`} />
            </div>
            <div className="pb-10">
                <h3 className={`text-Nunito font-bold leading-6 text-xl pl-9 pt-10 ${className}`}>{h3text}</h3>
                <GoDash className='h-10 w-10 text-blue ml-9' />
                <p className={`w-[460px] text-base font-Nunito leading-6 font-normal ml-9 mb-8 ${className}`}>{ptext}</p>
                <a href="#" className={`text-blue font-Nunito font-bold text-base leading-6 pl-8  ${className}`}>{atext} </a>
            </div>
        </div>
    )
}

export default WorkCardTwo