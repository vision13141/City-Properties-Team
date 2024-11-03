import React from 'react'
import Container from './Container'
import item1 from '../assets/Image/Item1.png'
import item2 from '../assets/Image/Item2.png'
import item3 from '../assets/Image/Item3.png'
import item4 from '../assets/Image/Item4.png'
import item5 from '../assets/Image/Item5.png'
import item6 from '../assets/Image/Item6.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlidePart = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 500,
        cssEase: "linear"
    };
    return (
        <div className='py-[15px]'>
            <Container>
                <h1 className='text-[#292929] text-[25px] font-bold text-center pb-8'>
                    Don’t worry to Fail. We have Experienced with Big Company’s</h1>
                <Slider {...settings}>
                    <img src={item1} />
                    <img src={item2} />
                    <img src={item3} />
                    <img src={item4} />
                    <img src={item5} />
                    <img src={item6} />
                </Slider>
            </Container>
        </div>
    )
}

export default SlidePart