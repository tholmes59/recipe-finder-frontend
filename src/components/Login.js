import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/currentUser.js'
import { Link } from 'react-router-dom'



class Login extends React.Component {

    state = {
        name: '',
        username: '',
        email: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.login(this.state, this.props.history)
        this.setState({
            name: '',
            username: '',
            email: '',
            password: ''
        })
    }
 
    render() {
        return (
            <div className="login-container">
                <div className="login-form">
                    <form onSubmit={this.handleSubmit} >
                    <h2 className="login-header">Login</h2>
                        {/* <label>Username:</label> */}
                        <input type="text" className="login-user" placeholder="Enter Username..." value={this.state.username} name="username" onChange={this.handleChange} /><br/>
                        {/* <label>Password:</label> */}
                        <input type="password" className="login-pass" placeholder="Enter Password..." value={this.state.password} name="password" onChange={this.handleChange} /><br/>
                        <input type="submit" className="login-button" />
                    </form>
                    <p>Not a Member Yet?</p>
                    <button type="button" className="login-signup-button"><Link className="linkbutton" to={`/signup`}>Please Signup</Link></button>
                </div>
               
            </div>
        )
    }
}

export default connect(null, { login })(Login)