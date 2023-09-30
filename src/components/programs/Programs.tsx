import React from 'react'
import { programs } from '../../lib'
import ProgramsList from './ProgramsList'
import "./Programs.css"

const Programs = () => {
  return (
    <div className='Programs_wrapper'>
      <h3>Enrolled Other Programs</h3>
      {
        programs.map((program : any) => (
          <ProgramsList name={program.name} active={program.active} key={program.name} />
        ))
      }
    </div>
  )
}

export default Programs