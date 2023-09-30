import React from 'react'
import pale from "../../assets/Ellipse 1924.png"
import "./Number.css"

const Number = () => {
  return (
    <div className='number_wrapper awon'>
      <div className="number_tag">
        <img src={pale} alt="" />
      </div>
      <div className="number_container awon_container">
        <h3 className="number_title">Number</h3>
        <div className="number awon_containerX">
          <p className="number_q">What regions within Saudi Arabia are you available 
            to pursue a traineeship opportunity? 
            You may select multiple options that apply
          </p>
          <p className="number_a">Dorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Etiam eu turpis molestie, dictum est a, mattis tellus. 
            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
            Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
            Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Number