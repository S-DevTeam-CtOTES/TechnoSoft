import React, { useState } from 'react'
import Tabs from '../Tabs/Tabs'

import plus from '../../../../assets/icons/Plus.svg'


import '../Works.scss'

const AccardionItem = ({data, index, toggle, selected}) => {

    const [valueTab, setValueTab] = useState(data.content[0].title);

    const getValue = (e) => {
        // console.log(e.target.value);
        setValueTab(e.target.value)
    }


  return (
    <div className="Works__wrapper-accardion-item">

        <div className="Works__wrapper-accardion-item-titleWrapper" onClick={() => toggle(index)}>
            <div className="Works__wrapper-accardion-item-titleWrapper-img"><img src={plus} alt="plus" /></div>
            <div className="Works__wrapper-accardion-item-titleWrapper-number">{data.number}</div>
            <div className="Works__wrapper-accardion-item-titleWrapper-title">{data.title}</div>
        </div>

        <div className={index === selected  ? "accardion-content-active" : "accardion-content"}>
            <Tabs getValue={getValue} name={data.tabs}/>    

            {data.content.map((item, i) => {

                if (item.title === valueTab) {
                    return (

                        <div className="Works__wrapper-accardion-item-content">
                            <div className="Works__wrapper-accardion-item-content-text">
                            <div className="Works__wrapper-accardion-item-content-text-title">{item.title}</div>
                            <div className="Works__wrapper-accardion-item-content-text-description">{item.subtitle}</div>
                            </div>
                            <div className="Works__wrapper-accardion-item-content-slider">
                                
                                {item.imgs.map((item, i) => {
                                    return (
                                        <div className="Works__wrapper-accardion-item-content-slider-item">
                                            <img src={item}  alt='item'/>
                                        </div>
                                    )
                                })}
                            
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