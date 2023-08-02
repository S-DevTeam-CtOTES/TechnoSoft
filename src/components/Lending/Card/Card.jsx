import React from 'react'

import card from '../../../assets/img/Card.svg'
import VK from '../../../assets/icons/VK.svg'
import TG from '../../../assets/icons/TG.svg'

import './Card.scss'


const Card = ({data}) => {

    console.log(data);

  return (
        <div className="Card">
            <div className="Card__img"><img src={data.img} alt="card" /></div>
            <div className="Card__wrapper">
                <div className="Card__wrapper-content">
                    <div className="Card__wrapper-content-title">ИМЯ:</div>
                    <div className="Card__wrapper-content-subtitle">{data.name}</div>
                </div>
                <div className="Card__wrapper-content">
                    <div className="Card__wrapper-content-title">ДОЛЖНОСТЬ:</div>
                    <div className="Card__wrapper-content-subtitle">{data.place}</div>
                </div>
                <div className="Card__wrapper-content">
                    <div className="Card__wrapper-content-title">ОПЫТ РАБОТЫ:</div>
                    <div className="Card__wrapper-content-subtitle">{data.experiance}</div>
                </div>

                <div className="Card__wrapper-content-description">{data.description}</div>

                <div className="Card__wrapper-content-imgs">
                    {/* <img src={VK} alt="VK" /> */}
                    {/* <a className="Card__wrapper-content-imgs-img" href={data.email}><img src={VK} alt="VK" /></a> */}
                    <a className="Card__wrapper-content-imgs-img" href={data.tg}><img src={TG} alt="TG" /></a>
                    
                </div>
            </div>
        </div>
  )
}

export default Card