import React from 'react'
import MenuItemIcon from './MenuItemIcon'
export default function MenuItem(props) {
  return (
    <div className='menuItem' onClick={() => props.fun(props.link)}>
      <MenuItemIcon icon={props.icon} />
    </div>
  )
}
