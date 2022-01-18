import { Link, NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="title-container">
        <Link to={"/"} className="site-name" style={{ textDecoration: "none" }} >Salts and Malts</Link>
        <p className="site-tagline">A beer-food pairing app that rises in the yeast and sets in the waist.</p>
      </div>
      <div className="icon-container">
        <NavLink to={"/"}><img className="home-icon" src="https://www.svgrepo.com/show/18449/home.svg" alt="home icon" /> </NavLink>
      </div>
    </header>
  )

}



export default Header;