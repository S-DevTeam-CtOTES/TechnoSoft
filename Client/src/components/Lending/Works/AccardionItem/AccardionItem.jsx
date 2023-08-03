import React, { useRef, useState } from 'react'
import Tabs from '../Tabs/Tabs'

import Slider from "react-slick";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import '../Works.scss'


const AccardionItem = ({data, index, toggle, selected}) => {

    const slider = useRef(null)

    const [valueTab, setValueTab] = useState(data.content[0].title);

    const getValue = (e) => {
        // console.log(e.target.value);
        setValueTab(e.target.value)
    }

    const settings = {
        infinite: true,
        arrows: true,  
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      };

  return (
    <div className="Works__wrapper-accardion-item">

        <div className={index === selected ? "Works__wrapper-accardion-item-titleWrapper titleWrapper-active" : "Works__wrapper-accardion-item-titleWrapper"} onClick={() => toggle(index)}>
            <div className={index === selected ? "Works__wrapper-accardion-item-titleWrapper-img img-active" : "Works__wrapper-accardion-item-titleWrapper-img "}>+</div>
            <div className="Works__wrapper-accardion-item-titleWrapper-number">{data.number}</div>
            <div className="Works__wrapper-accardion-item-titleWrapper-title">{data.title}</div>
        </div>

        <div className={index === selected  ? "accardion-content-active" : "accardion-content"}>

            <Tabs  
            getValue={getValue} 
            name={data.tabs}
            valueTab={valueTab}
            />    

            {data.content.map((item, i) => {

                if (item.title === valueTab) {
                    return (

                        <div key={i} className="Works__wrapper-accardion-item-content">
                            <div className="Works__wrapper-accardion-item-content-text">
                            <div className="Works__wrapper-accardion-item-content-text-title">{item.title}</div>
                            <div className="Works__wrapper-accardion-item-content-text-description">{item.subtitle}</div>
                            </div>
                            <div className="Works__wrapper-accardion-item-content-slider">
                                
                                <button style={{display: item.imgs.length <= 1 && 'none'}} className='Works__wrapper-accardion-item-content-slider-prev' onClick={() => slider?.current?.slickPrev()}></button>
                                <Slider ref={slider} {...settings}>

                                    {item.imgs.map((item, i) => {
                                        return (
                                            <div key={i} className="Works__wrapper-accardion-item-content-slider-item tg">
                                                <img src={item}  alt='item'/>
                                            </div>
                                        )
                                    })}
                                </Slider>
                                <button
                                style={{display: item.imgs.length <= 1 && 'none'}} 
                                className='Works__wrapper-accardion-item-content-slider-next' onClick={() => slider?.current?.slickNext()}></button>
                            
                            </div>
                        </div>
                    )

                }
            })}

            
        </div>
        

        </div>
  )
}

export default AccardionItem


 

// {data.content.map((item, i) => {
//     return (
//         <>
            
//         </>
//     )
// })}