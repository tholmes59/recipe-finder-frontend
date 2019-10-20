import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {

    return (
        <nav className="navbar">
            <p className="logo">Recipe Finder</p>
            <ul className="nav-links">
               <li className="nav-item"><NavLink to="/search">Search </NavLink></li> 
               <li className="nav-item"><NavLink to="/favorites">Favorites </NavLink></li>
               <li className="nav-item">{props.loggedIn ? <Logout /> : null}</li>
            </ul>
        </nav>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(Navbar);