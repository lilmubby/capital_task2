import Search from "../../assets/Search_Magnifying_Glass.png"
import Circle from "../../assets/Circle_Warning.png"
import Filter from "../../assets/Filter.png"
import "./SearchContainer.css"

const SearchContainer = () => {
  return (
    <div className='search_wrapper'>
      <div className='search_container'>
        <div>
          <img src={Search} alt={Search} />
          <input type="text" placeholder='Search by name, edu, exp or #tag' />
        </div>
        <img src={Circle} alt={Circle} />
      </div>
      <img src={Filter} alt={Filter} />
    </div>
  )
}

export default SearchContainer