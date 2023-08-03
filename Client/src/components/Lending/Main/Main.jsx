import React from 'react'

import leader from '../../../assets/img/leader.svg'
import '../../app/App.scss'
import './Main.scss';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <section className='Main'>
        <div className="container">
            <div className="Main__wrapper">
                <div className="Main__wrapper-content">
                    <h1 className="Main__wrapper-content-title title">Инновационные решения для вашего бизнеса</h1>
                    <div className="Main__wrapper-content-subtitle subtitle">Переводим идеи в код, создавая ваше цифровое будущее</div>
                    <button className="Main__wrapper-content-btn">
                        <Link to="/Contacts">
                            Записаться на консультацию
                        </Link>
                    </button>
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