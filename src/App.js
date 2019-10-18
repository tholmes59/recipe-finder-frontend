import React from 'react';
import './App.css';
import Login from './components/Login'
import Home from './components/Home'
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
            {this.props.loggedIn ? <Navbar /> : <Home />}
          </Route>
       <Route exact path='/signup' component={Signup}/>
       <Route exact path='/login' component={Login}/>
       <Route exact path='/search' component={Search}/>
       <Route exact path='/favorites' component={Favorites}/>
       <ListRecipe />
       </Router>
       <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser,
    favorites: state.favorites
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
