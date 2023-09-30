import React from 'react'
import LSHeader from '../components/leftSide/LSHeader'
import SearchContainer from '../components/leftSide/SearchContainer'
import QualifiedBar from '../components/leftSide/QualifiedBar'
import Person from '../components/leftSide/Persons'
import "./LeftSide.css"
import { persons } from '../lib'

const LeftSide = () => {
  return (
    <div className='leftside_container'>
      <LSHeader />
      <SearchContainer />
      <QualifiedBar />
      {
        persons.map((person: any, index: number) => (
          <Person key={index} fullname={person.fullName} label={person.label} degree={person.degree} />
        ))
      }
    </div>
  )
}

export default LeftSide