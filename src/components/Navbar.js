import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {

    return (
        <div>
            <NavLink to="/search">Search </NavLink>
            <NavLink to="/favorites">Favorites </NavLink>
            {props.loggedIn ? <Logout /> : null}
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(Navbar);