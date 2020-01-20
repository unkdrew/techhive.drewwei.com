import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/guides">Guides</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="https://drewwei.com" className="button special fit">Go back to drewwei.com</a></li>
            </ul>
        </div>
        <button className="close" onClick={props.onToggleMenu}>Close</button>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
