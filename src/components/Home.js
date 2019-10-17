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
            <div>
                <h2>Welcome to Recipe Finder</h2>
                {this.state.clicked ? 
                <span>
                    <button onClick={this.handleClick}><Link to="/signup">Sign Up</Link></button>
                    OR <button onClick={this.handleClick}><Link to="/login">Login</Link></button>
                </span> : null
                }
            </div>
        )
    }
}

export default Home;