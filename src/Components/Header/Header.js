import { Link } from 'react-router-dom'
import './Header.scss'
import HomeIcon from '../../assets/home-icon.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="title-container">
        <Link to={"/"} className="site-name" style={{ textDecoration: "none" }} >Salts and Malts</Link>
        <p className="site-tagline">A beer-food pairing app that rises in the yeast and sets in the waist.</p>
      </div>
      <div className="icon-container">
        <Link to={"/"}><img className="home-icon" src={HomeIcon} alt="home icon" /></Link>
      </div>
    </header>
  )

}



export default Header;