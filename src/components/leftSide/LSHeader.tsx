import Arrow_Down from "../../assets/Caret_Down_MD.png"
import "./LSHeader.css"

const LSHeader = () => {
  return (
    <div className='ls_header'>
      <button>
        SIP
      </button>
      <span className='pipe'>|</span>
      <div className="ls_container">
        <p>Opportunity Browsing</p>
        <p>2325</p>
        <span className='pipe'>|</span>
      </div>
      <img src={Arrow_Down} alt={Arrow_Down} />
    </div>
  )
}

export default LSHeader