import React from 'react'
import "./PersonalInfo.css"
import Nationality from "../../assets/UserCircle.png"
import NationalID from "../../assets/User_Square.png"
import Gender from "../../assets/User_02.png"
import dob from "../../assets/Calendar_Event.png"

const PersonalInfo = () => {
  return (
    <div className='personal_info_wrapper'>

      <h2 className='personal_info_title title'>
        Personal Information
      </h2>

      <div className="personal_info_container">

        <div className="nationality">
          <div className="nationality_icon">
            <img src={Nationality} alt="" />
          </div>
          <div className="national_container">
            <h3>Nationality</h3>
            <p>Sri Lanka</p>
          </div>
        </div>

        <div className="national_id">
          <div className="national_id_icon">
            <img src={NationalID} alt="national ID" />
          </div>
          <div className="national_id_container">
            <h3>National ID</h3>
            <p>0000000000</p>
          </div>
        </div>

        <div className="gender">
          <div className="gender_icon">
            <img src={Gender} alt={Gender} />
          </div>
          <div className="gender_container">
            <h3>Gender</h3>
            <p>Female</p>
          </div>
        </div>

        <div className="dob">
          <div className="dob_icon">
            <img src={dob} alt={dob} />
          </div>
          <div className="dob_container">
            <h3>Date Of Birth</h3>
            <p>00 - 00 - 0000</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PersonalInfo