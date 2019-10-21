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
                <form onSubmit={this.handleSubmit} className="search-form-container">
                    <input type="text" value={this.state.search} name="search" onChange={this.handleChange} placeholder="chicken,thigh" className="search-input"/>
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
        recipes: state.recipeSearch,
    }
}

export default connect(mapStateToProps, {searchRecipe})(Search);