import React from 'react'
import { title } from '../../lib'
import "./ProfileTab.css"

const ProfileTab = () => {
  return (
    <div className='profile_tab'>
      {
        title.map((title) => (
          <button key={title}>{title}</button>
        ))
      }
    </div>
  )
}

export default ProfileTab