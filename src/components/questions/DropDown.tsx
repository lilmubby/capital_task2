import React from 'react'
import "./DropDown.css"
import blue from "../../assets/Ellipse 1926.png"

const DropDown = () => {
  return (
    <div className='dropdown_wrapper awon'>
      <div className="dropdown_tag">
        <img src={blue} alt="" />
      </div>
      <div className="dropdown_container awon_container">
        <div className="dropdown_title">Dropdown</div>
        <div className="dropdown awon_containerX">
          <p className="dropdown_q">
            What regions within Saudi Arabia are you available to pursue a traineeship opportunity? 
            You may select multiple options that apply
          </p>
          <p className="dropdown_a">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default DropDown