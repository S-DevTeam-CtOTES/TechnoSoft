import React from 'react';
import Slider from "react-slick";


import card from '../../../assets/img/Card.svg'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import Card from '../Card/Card';
import './Teem.scss';


const Teem = () => {

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,  
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    
  };



  return (
    <section className='Teem'>
        <div className="container">
            <div className="Teem__wrapper">
                <div className="Teem__wrapper-title title">КОМАНДА</div>
                <div className="Teem__wrapper-slider">
                {/* <Swiper
                    // install Swiper modules
                    modules={[Pagination, Scrollbar]}
                    spaceBetween={100}
                    slidesPerView={3}
                    pagination={{ clickable: true}}
                    >
                    <SwiperSlide><Card/></SwiperSlide>
                    <SwiperSlide><Card/></SwiperSlide>
                    <SwiperSlide><Card/></SwiperSlide>
                    <SwiperSlide><Card/></SwiperSlide>
                    <SwiperSlide><Card/></SwiperSlide>
                    <SwiperSlide><Card/></SwiperSlide>
                    <SwiperSlide><Card/></SwiperSlide>
                    <SwiperSlide><Card/></SwiperSlide>
                    <SwiperSlide><Card/></SwiperSlide>
                    <SwiperSlide><Card/></SwiperSlide>
                </Swiper> */}

              <Slider className='button-slider' {...settings}>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
              </Slider>


                </div>

            </div>
        </div>
    </section>
  )
}

export default Teem