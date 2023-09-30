import "./MultipleChoice.css"
import green from "../../assets/Ellipse 1925.png"

const MultipleChoice = () => {
  return (
    <div className='mutiple_wrapper awon'>
      <div className="mutiple_tag">
        <img src={green} alt="" />
      </div>
      <div className="mutiple_container awon_container">
        <h3 className="multiple_title">Multiple Choice</h3>
        <div className="multiple awon_containerX">
          <p className="multiple_q">
          What regions within Saudi Arabia are you available to pursue a traineeship opportunity? 
          You may select multiple options that apply
          </p>
          <div>
            <span>
              New York
            </span>
            <span>
              New York
            </span>
            <span>
              New York
            </span>
            <span>
              New York
            </span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default MultipleChoice