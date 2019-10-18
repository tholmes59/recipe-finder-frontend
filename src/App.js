import React from 'react';
import './App.css';
import Login from './components/Login'
import Logout from './components/Logout'
import { getCurrentUser } from "./actions/currentUser.js"
import { connect } from 'react-redux'
import Signup from './components/Signup';
import Search from './components/Search'
import ListRecipe from './components/ListRecipe';
import Favorites from './components/Favorites'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()  
}

  render() {
    return (
      <div className="App">
        <Router>
          <Route>
            <Navbar />
          </Route>
        </Router>
       <Login/>
       <Signup />
       <Search />
       <ListRecipe />
       <Favorites />
       <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
