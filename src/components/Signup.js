import React from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions/currentUser.js'



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
        this.props.signup(this.state)
        this.setState({
            name: '',
            username: '',
            email: '',
            password: ''
        })
    }
 
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" placeholder="Enter Name..." value={this.state.name} name="name" onChange={this.handleChange} /><br/>
                    <label>Username:</label>
                    <input type="text" placeholder="Enter Username..." value={this.state.username} name="username" onChange={this.handleChange} /><br/>
                    <label>Email:</label>
                    <input type="email" placeholder="Enter Email..." value={this.state.email} name="email" onChange={this.handleChange} /><br/>
                    <label>Password:</label>
                    <input type="password" placeholder="Enter Password..." value={this.state.password} name="password" onChange={this.handleChange} /><br/>
                    <input type="submit" value="Sign Up"/>
                </form>
               
            </div>
        )
    }
}

export default connect(null, { signup })(Signup)