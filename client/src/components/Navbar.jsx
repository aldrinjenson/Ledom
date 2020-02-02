import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({person}) => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <a href="/" className="brand-logo">Ledom!</a>
                <ul className="right">
                    <li><a to="/">Logged In</a></li>
                    <li><Link to="/personA">Person A</Link></li>
                    <li><Link to="/personB">Person B</Link></li>
                    <li><Link to="/personC">Person C</Link></li>
                    <li><a to="/About">Sign Out</a></li>
                    <li><a to="/#"><button className="btn-floating red text-darken-3">{person}</button></a></li>
                </ul>
            </div>
        </nav>
    )
}
    

export default Navbar
