import React from 'react'
import "./Resume.css"
import hidden from "../assets/Show.png"
import downloadIcon from "../assets/File_Download.png"

const Resume = () => {
  return (
    <div className='resume_wrapper'>
      <div className="resume_heading">
        <p>Resume</p>
        <div className="resume_icons">
          <img src={hidden} alt="hidden" />
          <img src={downloadIcon} alt="Download Icon" />
        </div>
      </div>
      <div className='resume_container'></div>
    </div>
  )
}

export default Resume