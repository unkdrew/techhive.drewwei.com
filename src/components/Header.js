import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = (props) => (
  <header id="header" className="alt">
    <Link to="/" className="logo"><strong>Dreezy's</strong> <span>Tech Hive</span></Link>
    <nav>
      <button className="menu-link" onClick={props.onToggleMenu}>Menu</button>
    </nav>
  </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
