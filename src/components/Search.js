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
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.search} name="search" onChange={this.handleChange} placeholder="chicken,thigh" />
                <input value="Search" type="submit" />
            </form>
            <SearchResults recipes={this.props.recipes}/>
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