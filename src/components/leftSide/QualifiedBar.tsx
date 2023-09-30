import Checkbox from "../../assets/Default.png"
import { barBtn } from '../../lib'
import "./QualifiedBar.css"

const QualifiedBar = () => {

  
  return (
    <div className='qualifiedbar'>
      <img src={Checkbox} alt={Checkbox} className='checkbox_img' />
      <span className="pipe">|</span>
      {
        barBtn.map((btn: any) => (
          <>
            <div key={btn} className={btn.name === "Qualified" ? "lol" : ""}>
              <span>{btn.name}</span>
              <div>
                <span className='bar_btn_label'>{btn.label}</span>
              </div>
            </div>
            {btn.pipe && <span className="pipe">|</span> }
          </>
        ))
      }
    </div>
  )
}

export default QualifiedBar