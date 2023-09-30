import "./Edu.css"
import edu from "../../assets/Building_04.png"

const Edu = () => {
  return (
    <div className='edu_wrapper'>
      <h2 className="edu_title">
        Education
      </h2>
      
      <div className="edu">
        <div className="edu_icon">
          <img src={edu} alt={edu} />
        </div>
        <div className="edu_container">
          <h3>Bachelor in Biiochemistry</h3>
          <div className="edu_detail">
            <span className="uni">King Saud University</span>
            <span className='pipe'>|</span>
            <span>Saudi Arabia</span>
            <span className='pipe'>|</span>
            <span>Jan 2022</span>
            <span className='pipe'>|</span>
            <span>Jan 2023</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edu