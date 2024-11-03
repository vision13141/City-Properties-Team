import React from 'react'
import Image from './Image'
import { GoDash } from "react-icons/go";

const WorkCard = ({ src, className, h3text, num, atext, ptext }) => {
  return (
    <div className=' w-[360px] pt-5 bg-white shadow-2xl rounded-lg'>
      <div className="relative">
        <Image src={src} className={`w-[330px] h-[230px] ml-4 rounded-xl`} />
        <div className='h-12 w-12 bg-blue absolute bottom-[-20px] leading-0 left-10 rounded-md shadow-lg text-white'>
          <p className=' h-full flex items-center justify-center text-[22px] font-semibold'>{num}</p>
        </div>
      </div>
      <div className="pb-10">

        <h3 className={`text-Nunito font-bold leading-6 text-xl pl-9 pt-10 ${className}`}>{h3text}</h3>
        <GoDash className='h-10 w-10 text-blue ml-9' />
        <p className={`w-[290px] text-base font-Nunito leading-6 font-normal ml-9 ${className}`}>{ptext}</p>
        {/* <h4 >{h4text}</h4> */}
        <a href="#" className={`text-blue font-Nunito font-bold text-base leading-6 ${className}`}>{atext}</a>
      </div>
    </div>
  )
}

export default WorkCard

