import "./short.css"
import yellow from "../../assets/Ellipse 192.png"

const Short = () => {
  return (
    <div className='short_wrapper awon'>
      <div className="short_tag">
        <img src={yellow} alt="tag" />
      </div>
      <div className="short_container">
        <h3 className="short_title">
          Short Answer
        </h3>
        <div className="short">
          <p className='short_q'>
            What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply
          </p>
          <p className='short_a'>
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Short