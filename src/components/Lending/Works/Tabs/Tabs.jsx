import React, {useState} from 'react'

import './Tabs.scss'

const Tabs = ({getValue, name, valueTab}) => {


  return (
    <div className='Tabs'>
        <div className="Tabs__wrapper">
            {name.map((item, i) => {
                return (
                    <button key={i} onClick={getValue} value={item} className={valueTab === item ? "Tabs__wrapper-item active-tab" : "Tabs__wrapper-item"}>{item}</button>
                )
            }) }
        </div>
    </div>
  )
}

export default Tabs