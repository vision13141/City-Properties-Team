import React from 'react'
import Container from './Container'
import Image from './Image'
import Clint_one from '../assets/Image/clint_one.png'
import Clint_two from '../assets/Image/clint_two.png'
import Clint_three from '../assets/Image/clint_three.png'
import Clint_four from '../assets/Image/clint_four.png'
import Clint_five from '../assets/Image/clint_five.png'
import Clint_six from '../assets/Image/clint_six.png'
import Clint_seven from '../assets/Image/clint_seven.png'

const HappyClint = () => {
    return (
        <section className='bg-[#f6f7fe]  pt-[80px] pb-[220px]'>
            <Container>
                <h3 className='font-Nunito text-[40px] leading-10 text-title font-bold text-center pt-20'>
                    Our Happy Client Says
                </h3>

                <div className="flex justify-around mt-20">
                    <div className="">
                        <Image src={Clint_one} />
                    </div>
                    <div className="">
                        <Image src={Clint_two} />
                    </div>
                    <div className="">
                        <Image src={Clint_three} />
                    </div>
                </div>

                {/* 2nd part */}
                <div className="flex justify-evenly mt-10">
                    <div className="mr-10">
                        <Image src={Clint_four} />
                    </div>
                    <div className="">
                        <p className='w-[420px] text-center leading-7 font-Nunito text-base text-title font-normal'>‘’Buying real estate is not only the best way, the quickest way,
                            the safest way, but the only way to become wealthy.
                            The best investment on Earth is earth.’’</p>
                    </div>
                    <div className="ml-10">
                        <Image src={Clint_five} />
                    </div>
                </div>

                {/* 3rd part */}
                <div className="flex justify-evenly mt-7">
                    <div className="mt-7">
                        <Image src={Clint_six} />
                    </div>
                    <div className="">
                        <h3 className='text-center leading-7 font-Nunito text-xl text-title font-semibold'>Jhon Obalton</h3>
                        <p className='text-center leading-7 font-Nunito text-base text-title font-normal'>CEO, Amazon</p>
                    </div>
                    <div className="mt-7">
                        <Image src={Clint_seven} />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HappyClint