import React from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions/currentUser.js'
import { Link } from 'react-router-dom'

class Signup extends React.Component {

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
        this.props.signup(this.state, this.props.history)
        this.setState({
            name: '',
            username: '',
            email: '',
            password: ''
        })
    }
 
    render() {
        return (
            <div className="signup-container">
                <div className="signup-form">
                    <form onSubmit={this.handleSubmit} >
                        <h2 className="signup-header">Sign up</h2>
                        <input type="text" className="signup-name" placeholder="Enter Name..." value={this.state.name} name="name" onChange={this.handleChange} /><br/>
                        <input type="text" className="signup-user" placeholder="Enter Username..." value={this.state.username} name="username" onChange={this.handleChange} /><br/>
                        <input type="email" className="signup-email" placeholder="Enter Email..." value={this.state.email} name="email" onChange={this.handleChange} /><br/>
                        <input type="password" className="signup-pass" placeholder="Enter Password..." value={this.state.password} name="password" onChange={this.handleChange} /><br/>
                        <input type="submit" className="signup-button" value="Sign Up"/>
                    </form>
                    <p>Already a member?</p>
                    <button type="button" className="signup-login-button"><Link className="linkbutton" to={`/login`}>Please Login</Link></button>
                </div>
            </div>
        )
    }
}

export default connect(null, { signup })(Signup)