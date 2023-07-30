import React from 'react';
import Slider from "react-slick";


import card from '../../../assets/img/Card.svg'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


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
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <section className='Teem'>
        <div className="container">
            <div className="Teem__wrapper">
                <div className="Teem__wrapper-title title">КОМАНДА</div>
                <div className="Teem__wrapper-slider">

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