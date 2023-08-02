import React from 'react'

import { NavLink } from 'react-router-dom'
import './Menu.scss'

const Menu = ({items, active, setActive}) => {
  return (
    <div className={active ? "menu active" : "menu"} onClick={() => setActive(false)}>
        <div className="blur"/>
        <div className="menu__content" onClick={e => e.stopPropagation()}>
                <div className="menu__content-link">
                    <NavLink 
                    onClick={() => setActive(false)}
                    end
                    to='/'
                    style={({isActive}) => ({color: isActive ? '#21A7AF' : 'white'})}
                    >ГЛАВНАЯ
                    </NavLink>
                </div>
                {items.map(item => 
                    <a onClick={() => setActive(false)} className='menu__link' href={item.href}>{item.value}</a>
                )}
                <div className="menu__content-link">
                    <NavLink 
                    onClick={() => setActive(false)}
                    end 
                    to='/Contacts'
                    style={({isActive}) => ({color: isActive ? '#21A7AF' : 'white'})}
                    >КОНТАКТЫ
                    </NavLink>
                </div>
        </div>
    </div>
  )
}

export default Menu