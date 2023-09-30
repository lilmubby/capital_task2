import Avatar from '../components/SideNav/Avatar'
import Icons from '../components/SideNav/Icons'
import UtilNav from '../components/SideNav/UtilNav'
import "./SideNav.css"

const SideNav = () => {
  return (
    <div className='sidenav'>
      <div className='sidenav_wrapper'>
        <Avatar />
        <Icons />
      </div>
      <UtilNav />
    </div>
  )
}

export default SideNav