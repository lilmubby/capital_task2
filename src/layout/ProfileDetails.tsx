import React from 'react'
import ProfileCard from '../components/Profile/ProfileCard'
import ProfileTab from '../components/Profile/ProfileTab'
import PersonalInfo from '../components/Profile/PersonalInfo'
import Edu from '../components/Profile/Edu'
import Work from '../components/Profile/Work'
import "./ProfileDetails.css"
import Resume from '../components/Resume'
import Question from '../components/questions/Question'
import Programs from '../components/programs/Programs'

const ProfileDetails = () => {
  return (
    <div className='profile_details'>
      <ProfileCard />
      <ProfileTab />
      <PersonalInfo />
      <Edu />
      <Work />
      <Resume />
      <Question />
      <Programs />
    </div>
  )
}

export default ProfileDetails