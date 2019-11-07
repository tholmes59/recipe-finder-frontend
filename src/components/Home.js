import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {

    state = {
        clicked: false 
    }

    componentDidMount() {
        this.setState({
            clicked: false
        })
    }

    handleClick = () => {
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }))
    }

    render () {
        return(
            <>
            <div className="home-container">
                <h1>Welcome to Recipe Finder</h1><br/>
                <p>A web application to help you find a great recipe for what you have in your kitchen</p>
                </div>
                <div className="home-container-buttons">
                    { !this.state.clicked ?
                    <span>
                        <p>Please</p>
                        <button onClick={this.handleClick} className="home-button"><Link to="/signup" className="home-linkbutton">Sign Up</Link></button>
                        <p>-or-</p> <button onClick={this.handleClick} className="home-button"><Link to="/login" className="home-linkbutton">Login</Link></button>
                    </span>
                    : null
                    }
                </div>
            </>
        )
    }
}

export default Home;