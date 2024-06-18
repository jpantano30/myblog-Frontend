
import { Link } from 'react-router-dom'
import './NavBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ handleSearch }) => {

  const handleInputChange = (event) => {
    handleSearch(event.target.value)
  }

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <Link to="/">Mindful Balance</Link>
        <FontAwesomeIcon icon={faSpa} style={{color: "#63E6BE", marginRight: '10px'}} />
      </div>
      <div className='navbar-links'>
        <Link to="/new">Add a Blog Post!</Link>
      </div>
      <div className='navbar-search'>
        <input type='text' placeholder='Search blog posts...' onChange={handleInputChange} />
      </div>
    </nav>
  )
}

export default NavBar
