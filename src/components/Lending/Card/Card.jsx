import React from 'react'

import card from '../../../assets/img/Card.svg'
import VK from '../../../assets/icons/VK.svg'
import TG from '../../../assets/icons/TG.svg'

import './Card.scss'


const Card = () => {
  return (
        <div className="Card">
            <div className="Card__img"><img src={card} alt="card" /></div>
            <div className="Card__wrapper">
                <div className="Card__wrapper-content">
                    <div className="Card__wrapper-content-title">ИМЯ:</div>
                    <div className="Card__wrapper-content-subtitle">Чепрасов Глеб Сергеевич</div>
                </div>
                <div className="Card__wrapper-content">
                    <div className="Card__wrapper-content-title">ДОЛЖНОСТЬ:</div>
                    <div className="Card__wrapper-content-subtitle">CEO - генеральный директор</div>
                </div>
                <div className="Card__wrapper-content">
                    <div className="Card__wrapper-content-title">ОПЫТ РАБОТЫ:</div>
                    <div className="Card__wrapper-content-subtitle">Более 15 лет опыта в IT</div>
                </div>

                <div className="Card__wrapper-content-description">Джон Смит - вдохновленный и талантливый лидер, основатель и генеральный директор нашей компании. С более чем 15-летним опытом работы в IT-индустрии, он является ведущим экспертом в области разработки и внедрения инновационных решений.</div>

                <div className="Card__wrapper-content-imgs">
                    {/* <img src={VK} alt="VK" /> */}
                    <a href="/"><img src={VK} alt="VK" /></a>
                    <img src={TG} alt="TG" />
                </div>
            </div>
        </div>
  )
}

export default Card