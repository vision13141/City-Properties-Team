import { useGSAP } from '@gsap/react'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


const CounterUpCard = ({ item }) => {
    let { num, img, dtl, amountTyp } = item


    gsap.registerPlugin(ScrollTrigger)

    let [printNum, setprintNum] = useState(1)

    useEffect(() => {
        gsap.to(printNum, {
            onUpdate: function name() {
                setInterval(() => {
                    if (printNum == num) {
                        clearInterval()
                    }
                    if (printNum <= num) {
                        setprintNum(printNum += num >= 1000000000 ? 2500000 : 200 && num >= 1000000 ? 50000 : 200 && num >= 100000 ? 200 : 50)
                    }
                }, printNum / 1000);
            },
            scrollTrigger: {
                trigger: '.counter',
                // scroller: 'body',
                start: 'top 80%',
            }
        })
    }, [])


    return (
        <div className="w-[265px]">
            <img src={img} alt="" className='mx-auto' />
            <h2 className='text-5xl font-bold font-Nunito text-center mt-[20px]'>
                {

                    printNum < 1000 ? printNum : `${(printNum / 1000).toFixed(0)}K`
                        && printNum < 1000000 ? `${(printNum / 1000).toFixed(0)}K` : `${(printNum / 1000000).toFixed(0)}M`
                            && printNum < 1000000000 ? `${(printNum / 1000000).toFixed(0)}M` : `${(printNum / 1000000000).toFixed(0)}B`

                    // printNum < 1000000 ?
                    //     printNum < 100000 ?
                    //         printNum < 100000 ? `${(printNum / 1000).toFixed(0)}K` : printNum
                    //         : printNum < 1000000 ? `${(printNum / 100000).toFixed(0)}M` : printNum
                    //     : printNum < 10000000 ? `${(printNum / 1000000).toFixed(0)}B` : printNum

                }
            </h2>
            <p className='tex-[20px] font-Nunito opacity-[60%] text-center mb-10px'>{dtl}</p>
        </div>
    )
}

export default CounterUpCard