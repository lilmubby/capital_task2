import React from 'react'
import Short from './Short'
import Video from './video'
import Number from './Number'
import MultipleChoice from './MultipleChoice'
import DropDown from './DropDown'
import "./Question.css"

const Question = () => {
  return (
    <div className='question_wrapper'>
      <div className="question_heading">
        <h3>Additional Questions</h3>
        <p>Sort</p>
      </div>
      <Short />
      <Video />
      <Number />
      <MultipleChoice />
      <DropDown />
    </div>
  )
}

export default Question