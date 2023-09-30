import React from 'react'
import { persons } from '../../lib'
import "./Persons.css"
import Checkbox from "../../assets/Default.png"

const Person : React.FC<{fullname: string,label: string,degree: string, }> = ({fullname, label, degree}) => {
  const personTags = persons.map((person : any) => person.tags)
  return (
    <div className='person'>
      <img src={Checkbox} alt="checkbox Image" />
      <div>
        <div className="person_logo">
          <span className="initials">{label}</span>
        </div>
        <div className="person_overview">
          <h3>{fullname}</h3>
          <p>Saudi Arabia</p>
          <div className='person_edu'>
            <span>{degree}</span>
            <span>(2023 - 2023) </span>
          </div>
          <div className='person_tags'>
            {
              personTags[0].map((tag: string) => (
                <span key={tag}>{tag}</span>
              ))
            }
          </div>
          <div>
            <span>New York</span>
            <span>Marketing</span>
            <span>London</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Person