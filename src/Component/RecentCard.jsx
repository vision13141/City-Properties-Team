import React from 'react'
import Image from './Image'
import { FaCalendarAlt } from "react-icons/fa";
import Work_four from '../assets/Image/work_four.jpg'






const RecentCard = () => {
  return (
    <div className="flex gap-5">
      <div className="overflow-hidden rounded-xl">
        <Image src={Work_four} className="h-[100px] w-[150px] object-cover hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="flex-1">
        <h3 className='text-gray-800 text-Nunito font-semibold leading-6 text-lg hover:text-blue transition-colors duration-300'>Building design process within teams</h3>
        <div className="flex items-center gap-2 mt-3">
          <FaCalendarAlt className='text-blue' />
          <p className='text-gray-600 text-Nunito font-normal text-sm'>Jun 07, 2024</p>
        </div>
      </div>
    </div>
  )
}

export default RecentCard