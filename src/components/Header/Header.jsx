import React from 'react'

import './Header.scss'

const Header = ({setActiveMenu, activeMenu}) => {
  return (
    <header className='Header'>
        <div onClick={() => setActiveMenu(!activeMenu)} className={activeMenu ? "Header__burgerbtn-active" : "Header__burgerbtn"} >
            <span/>
        </div>
    </header>
  )
}

export default Header;