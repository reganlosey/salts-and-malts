import {Link} from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <Link to={'/'} className="site-name" style={{textDecoration: "none"}}>SALTS AND MALTS</Link>
      <p className="tagline">a beer-food pairing app that rises in the yeast and sets in the waist</p>
    </header>
  )

}



export default Header;