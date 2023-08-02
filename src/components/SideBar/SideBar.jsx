import {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/icons/Logo.svg'
import './SideBar.scss'

const SideBar = () => {
    const dataLink = [
        {
            name: 'О НАС',
            href: '#AboutUs'
        }, 
        {
            name: 'КОМАНДА',
            href: '#Teem'
        }, 
        {
            name: 'РАБОТЫ',
            href: '#Works'
        }
    ]
          
  return (
    <div className="SideBar">
            
            <div className="SideBar__img">
                <img src={logo} alt="logo" />
            </div>
        
            <div className="SideBar__list">
                
                <div className="SideBar__list-Link">
                    <NavLink 
                    end
                    to='/'
                    style={({isActive}) => ({color: isActive ? '#21A7AF' : '#000'})}
                    >ГЛАВНАЯ
                    </NavLink>
                </div>
                
                {dataLink.map((item, i) => {   
                    return (
                        <a href={item.href} key={i} className="SideBar__list-Link">{item.name}</a>
                    )
                })}

                
                <div className="SideBar__list-Link">
                    <NavLink 
                    end 
                    to='/Contacts'
                    style={({isActive}) => ({color: isActive ? '#21A7AF' : '#000'})}
                    >КОНТАКТЫ
                    </NavLink>
                </div>
                    
            </div>
    </div>
  )
}

export default SideBar