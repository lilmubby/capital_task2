import React from 'react'
import "./Video.css"
import blue from "../../assets/Ellipse 1923.png"
import video from "../../assets/Vdo.png"
const Video = () => {
  return (
    <div className='video_wrapper awon'>
      <div className="video_tag">
        <img src={blue} alt="" />
      </div>
      <div className="video_container awon_container">
        <h3 className="video_title">Video Upload</h3>
        <div className="video awon_containerX">
          <p className="video_q">
            What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply
          </p>
          <img src={video} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Video