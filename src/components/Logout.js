import React from 'react' 
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'

const Logout = (props) => {
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            props.logout()
        }
    }>
        <input type="submit" value=" Log Out"/>
    </form>
    )
}
export default connect(null, { logout })(Logout)