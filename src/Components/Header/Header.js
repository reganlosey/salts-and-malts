import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <Link to={'/'} className="site-name" style={{ textDecoration: "none" }} >Salts and Malts</Link>
      <p className="site-tagline">A beer-food pairing app that rises in the yeast and sets in the waist.</p>
    </header>
  )

}



export default Header;