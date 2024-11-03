import React from 'react'
import CounterUpCard from './CounterUpCard'
import Container from './Container'
import Subscribe from './Subscribe'
import Badge from '../assets/Image/Badge.png'
import Badge1 from '../assets/Image/Badge1.png'
import Badge2 from '../assets/Image/Badge2.png'
import Badge3 from '../assets/Image/Badge3.png'


const CounterUp = () => {

    let count = [
        {
            num: 34000000,
            img: Badge,
            dtl: "Money In & Out",
            amountTyp: "M"
        },
        {
            num: 208000,
            img: Badge1,
            dtl: "Total Host of Homey",
            amountTyp: "K"
        },
        {
            num: 31000,
            img: Badge2,
            dtl: "Total happy Customer",
            amountTyp: "K"
        },
        {
            num: 3000000000,
            img: Badge3,
            dtl: "Total Host of Homey",
            amountTyp: "B+"
        },
    ]
    return (
        <div className='pt-[80px] h-[100vh] counter'>
            <Container className="">
                <div className="flex justify-between">
                    {
                        count.map((item, idx) => {
                            return (
                                <div key={idx} className='w-[265px] flex justify-between items-center'>
                                    <CounterUpCard item={item} />
                                    {
                                        count.at(-1) == item ? false
                                            : <span className='h-[80%] w-[2px] bg-[#E5B170] spanLine'></span>
                                    }
                                </div>
                            )
                        })
                    }
                </div>

                <Subscribe />
            </Container>
        </div>
    )
}

export default CounterUp