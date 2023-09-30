import React from 'react'
import work from "../../assets/Suitcase.png"
import "./Work.css"

const Work = () => {
  return (
    <div className='work_wrapper'>
      <h2 className="work_title">Work</h2>
      
      <div className="work">
        <div className="work_icon">
          <img src={work} alt={work} />
        </div>
        <div className="work_container">
          <h3>Cyber Security Intern</h3>
          <div className="work_detail">
            <span className="company">Coop Training</span>
            <span className='pipe'>|</span>
            <span>Saudi Arabia</span>
            <span className='pipe'>|</span>
            <span>Jan 2022 - Jan 2023</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work