import React from 'react'
import { connect } from 'react-redux'
import { fetchRecipe } from '../actions/recipeSearch'

const FavoritesCard = props => {

    const handleClick = event => {
        event.preventDefault()
        props.fetchRecipe(props.favorite.attributes.recipe_identifier)
    }

    return (
        <div>
            <p>{props.favorite.attributes.recipe_title}</p>
            <button type="button" onClick={handleClick}>View Recipe</button>
        </div>
    )
}

export default connect(null, { fetchRecipe })(FavoritesCard);