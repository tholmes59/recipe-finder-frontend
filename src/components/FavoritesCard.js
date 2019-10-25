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
        <div className="favoritesCard">
            <img src={props.favorite.attributes.recipe_image} alt="Food pic" className="favoritesCard-img"/><br/><br/>
            <p>{props.favorite.attributes.recipe_title}</p><br/>
            <button type="button" onClick={handleClick} className="favoritesCard-button"><Link className="favorites-linkbutton" to={`/recipe/${props.favorite.attributes.recipe_identifier}`}>View Recipe</Link></button>
        </div>
    )
}

export default connect(null, { fetchRecipe })(FavoritesCard);