import React from 'react'
import Swatches from "../../assets/Swatches_Palette.png"

interface props {
  name: string,
  active: boolean
}

const ProgramsList:React.FC<props> = ({name, active}) => {
  return (
    <div className="program_container">
      <div className="program_logo">
        <img src={Swatches} alt={Swatches} />
      </div>
      <div className='qwery'>
        <div className="programs">
          <p>{name}</p>
          <span className={`program_${active ? 'active' : 'disqualified'}`}>
            {active ? 'Active' : 'Disqualified'}
          </span>
        </div>
        <p className='current_program'>
          Currently at Video Task
        </p>

      </div>
    </div>
  )
}

export default ProgramsList