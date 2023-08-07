
import React from 'react';

import Vk from '../../assets/icons/FooterVK.svg'
import DS from '../../assets/icons/FooterDS.svg'
import TG from '../../assets/icons/FooterTG.svg'

import './Footer.scss'


const Footer = () => {
    const icons = [
        {
            img: Vk,
            href: 'https://vk.com/tecnosoft'
        },
        {
            img: DS,
            href: 'https://discord.gg/QWJ7Vfp3'
        },
        {
            img: TG,
            href: 'https://t.me/tehnosoft_news'
        },
    ]
    const currentYear = new Date().getFullYear();
    
  return (
    
    <footer className='Footer'>
            <div className="Footer__wrapper">
                <div className="Footer__wrapper-information">
                    <div className="Footer__wrapper-information-address">г. Москва, ПР-КТ МИРА, Д. 102, К. 1, ПОМЕЩ. 3/7, ОФИС 59</div>
                    <div className="Footer__wrapper-information-contacts">
                        <a href="tel:79646345553" className="Footer__wrapper-information-contacts-number">+ 7 964 634 55-53</a>
                        /
                        <a href="mailto:G.Cheprasov@tehnosoft.site" className="Footer__wrapper-information-contacts-email">G.Cheprasov@tehnosoft.site</a>
                    </div>
                    <div className="Footer__wrapper-information-links">
                        {icons.map((item, i) => {
                            return (
                                <a className="Footer__wrapper-information-links-link " href={item.href}><img src={item.img} alt='item' /></a>
                                )
                            })}
                    </div>
                </div>
                <div className="Footer__wrapper-copyrate">
                © 2020 — {currentYear} ООО “МТК ТехноСофт”. Все права защищены. Копирование и любое использование материалов возможно только при наличии ссылки на первоисточник
                </div>
            </div>
    </footer>
  )
}

export default Footer