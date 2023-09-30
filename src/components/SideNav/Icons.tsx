import React from 'react'
import Home from "../../assets/home.png"
import Users from "../../assets/Users_Group.png"
import Calender from "../../assets/calender.png"
import Share from "../../assets/Share_Android.png"
import Doc from "../../assets/File.png"
import Notebook from "../../assets/Notebook.png"
import Heart from "../../assets/Heart.png"
import Arrow from "../../assets/arrow.png"
import "./Icons.css"

const Icons = () => {
  return (
    <div className='sidebar_icon'>
      {
        [Home, Users, Calender, Share, Doc, Notebook, Heart, Arrow].map((icon: string) => (
          <img src={icon} alt={`${icon} image`} className={`${icon} sideNavIcon`} key={icon} />
        ))
      }
    </div>
  )
}

export default Icons