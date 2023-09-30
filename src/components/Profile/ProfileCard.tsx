import React from 'react'
import Plus from "../../assets/Add_Plus_Circle.png"
import X from "../../assets/close.png"
import "./ProfileCard.css"
import vdo from "../../assets/Vdo.png"

const ProfileCard = () => {
  return (
    <div className='profile_container'>
      <div className='profile_video_container'>
        {/* <img src={vdo} alt="" /> */}
      </div>
      <div className='profile_info'>
        <div className='profile_heading'>
          <h3>Full Name</h3>
          <div className='profile_job_tags'>
            <span>New York</span>
            <span>Marketing</span>
            <span>London</span>
          </div>
        </div>

        <div className='profile_contact'>
          <p>Location</p>
          <span className='pipe_neutral'>|</span>
          <p>Email</p>
          <span className='pipe_neutral'>|</span>
          <p>Phone</p>
        </div>

        <div className='profile_tag_container'>
          <div>
            <span>#top_candidate</span>
            <img src={X} alt={X} />
          </div>
          <div>
            <span>#marketing_june</span>
            <img src={X} alt={X} />
          </div>
          <button>
            <img src={Plus} alt={Plus} />
            <span>
              Add tag
            </span>
          </button>
      </div>
      </div>

      <div className='profile_score_wrapper'>
          <div className='profile_score'>
            <p>Overall Score</p>
            <p>7</p>
          </div>
          <div className='profile_applied'>
            Applied on 12 June 2023
          </div>
        </div>
    </div>
  )
}

export default ProfileCard