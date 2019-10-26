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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {

  state = {
    clicked: false
}
 
  componentDidMount() {
    this.props.getCurrentUser()  
}

handleFormClick = () => {
  this.setState(prevState => ({
  clicked: !prevState.clicked
  }))
}

  render() {
    return (
      <div className="App">
        <Router>
          <Route>
            {this.props.loggedIn ? <Navbar /> : <Home clicked={this.state.clicked} handleFormClick={this.handleFormClick}/>}
          </Route>
          <Switch>
            <Route exact path='/signup' render={({history}) => <Signup history={history}/>}/>
            <Route exact path='/login' render={({history}) => <Login history={history}/>}/>
            <Route exact path='/search' component={Search}/>
            {/* <Route exact path='/recipe' component={ListRecipe}/> */}
            <Route exact path='/favorites' component={Favorites}/>
            <Route exact path='/recipe/:id' render={props => <ListRecipe {...props} key={this.props.recipeItems && this.props.recipeItems.id} recipeItems={this.props.recipeItems}/>}/>
        </Switch>
       </Router>
       {/* <ListRecipe /> */}
       <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser,
    favorites: state.favorites,
    recipeItems: state.recipeSearch.recipe
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
