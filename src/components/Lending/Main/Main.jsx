import React from 'react'

import leader from '../../../assets/img/leader.svg'

import './Main.scss';

const Main = () => {
  return (
    <section className='Main'>
        <div className="container">
            <div className="Main__wrapper">
                <div className="Main__wrapper-content">
                    <h1 className="Main__wrapper-content-title title">Инновационные решения для вашего бизнеса</h1>
                    <div className="Main__wrapper-content-subtitle subtitle">Переводим идеи в код, создавая ваше цифровое будущее</div>
                    <button className="Main__wrapper-content-btn">Записаться на консультацию</button>
                </div>
                <div className="Main__wrapper-img">
                    <img src={leader} alt="leader" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Main