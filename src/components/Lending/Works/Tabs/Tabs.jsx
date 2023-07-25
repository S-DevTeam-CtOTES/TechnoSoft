import React from 'react'

import './Tabs.scss'

const Tabs = ({getValue, name}) => {
  return (
    <div className='Tabs'>
        <div className="Tabs__wrapper">
            {name.map((item, i) => {
                return (
                    <button key={i} onClick={getValue} value={item} className="Tabs__wrapper-item">{item}</button>
                )
            }) }
        </div>
    </div>
  )
}

export default Tabs