import React from 'react'
import { searchRecipe } from '../actions/recipeSearch'
import { connect } from 'react-redux'
import SearchResults from './SearchResults'

class Search extends React.Component {

    state = {
        search: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.searchRecipe(this.state.search);
        this.setState({
            search: ''
        })
    }


    render() {
        return (
            <>
            <div className="search">
                <h1>Welcome to Recipe Finder {this.props.user && this.props.user.attributes.name}!</h1>
                <h2>Are you hungry but don't know what to make?</h2>
                <h3>Search for a recipe using <span>Spoonacular API</span></h3>
                <h4>Type in an ingredient you have in your kitchen below and let Recipe Finder find you the perfect recipe!</h4>
                <p>For multiple ingredients please separate by a comma</p>     
                <form onSubmit={this.handleSubmit} className="search-form-container">
                    <input type="text" value={this.state.search} name="search" onChange={this.handleChange} placeholder="spaghetti,meatballs" className="search-input"/>
                    <input value="Search" type="submit" className="search-button"/>
                </form>
                <SearchResults recipes={this.props.recipes}/>
            </div>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
        recipes: state.recipeSearch,
    }
}

export default connect(mapStateToProps, {searchRecipe})(Search);