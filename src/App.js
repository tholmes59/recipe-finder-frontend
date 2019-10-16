import React from 'react';
import './App.css';
import Login from './components/Login'
import Logout from './components/Logout'
import { getCurrentUser } from "./actions/currentUser.js"
import { connect } from 'react-redux'
import Signup from './components/Signup';
import Search from './components/Search'
import ListRecipe from './components/ListRecipe';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()  
}

  render() {
    return (
      <div className="App">
       {this.props.currentUser ? <Logout/> : <Login/>}
       <Signup />
       <Search />
       <ListRecipe />
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
