import React from 'react'
import { connect } from 'react-redux'
import { fetchRecipe } from '../actions/recipeSearch'
import { Link } from 'react-router-dom'

const FavoritesCard = props => {

    const handleClick = event => {
        event.preventDefault()
        props.fetchRecipe(props.favorite.attributes.recipe_identifier)
    }

    return (
        <div>
            <p>{props.favorite.attributes.recipe_title}</p>
            <img src={props.favorite.attributes.recipe_image} alt="Food pic" className="recipeCard-img"/>
            <button type="button" onClick={handleClick}><Link to={`/recipe/${props.favorite.attributes.recipe_identifier}`}>View Recipe</Link></button>
        </div>
    )
}

export default connect(null, { fetchRecipe })(FavoritesCard);