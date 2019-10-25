import React from 'react'
import { fetchRecipe } from '../actions/recipeSearch'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class RecipeCard extends React.Component {

    handleClick = (event) => {
        event.preventDefault();
        this.props.fetchRecipe(this.props.recipe.id)
    }

    render () {
        return (
            <>
            <div className="recipeCard">
                <img src={this.props.recipe.image} alt="Food pic" className="recipeCard-img"/><br/><br/>
                <p>{this.props.recipe.title}</p><br/>
                {/* <p>Recipe provided by {this.props.recipe.publisher}</p> */}
                <button type="button" onClick={this.handleClick} className="recipeCard-button"><Link className="linkbutton" to={`/recipe/${this.props.recipe.id}`}>Recipe Details</Link></button>
            </div>
            </>
        )
    }
}

export default connect(null, {fetchRecipe})(RecipeCard);