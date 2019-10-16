import React from 'react'
import { fetchRecipe } from '../actions/recipeSearch'
import { connect } from 'react-redux'

class RecipeCard extends React.Component {

    handleClick = (event) => {
        event.preventDefault();
        this.props.fetchRecipe(this.props.recipe.recipe_id)
    }
    render () {
        return (
            <>
            <div className="recipeCard">
                <img src={this.props.recipe.image_url} alt="Food pic" className="recipeCard-img"/>
                <p>{this.props.recipe.title}</p>
                <p>Recipe provided by {this.props.recipe.publisher}</p>
                <button type="button" onClick={this.handleClick} className="recipeCard-button">Recipe Details</button>
            </div>
            </>
        )
    }
}

export default connect(null, {fetchRecipe})(RecipeCard);