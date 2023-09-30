import React from 'react'
import Avatar from '../components/SideNav/Avatar'
import Icons from '../components/SideNav/icons'
import UtilNav from '../components/SideNav/utilNav'
import "./SideNav.css"

const SideNav = () => {
  return (
    <div className='sidenav'>
      <div className='sidenav_wrapper'>
        <Avatar />
        <Icons />
      </div>
      <UtilNav />
    </div>
  )
}

export default SideNav