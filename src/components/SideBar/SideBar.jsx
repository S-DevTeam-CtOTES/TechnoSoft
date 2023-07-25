import {} from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/Logo.svg'
import './SideBar.scss'

const SideBar = () => {

    const dataLink = ['О НАС', 'КОМАНДА', 'РАБОТЫ'];

  return (
    <div className='SideBar'>
            
            <div className="SideBar__img">
                <img src={logo} alt="logo" />
            </div>
        
            <div className="SideBar__list">
                <Link to='/'>
                    <div className="SideBar__list-Link">ГЛАВНАЯ</div>
                </Link>

                
                {dataLink.map((item, i) => {
                    return (
                        <div key={i} className="SideBar__list-Link">{item}</div>
                    )
                })}

                <Link to='/Contacts'>
                    <div className="SideBar__list-Link">КОНТАКТЫ</div>
                </Link>
            </div>
    </div>
  )
}

export default SideBar