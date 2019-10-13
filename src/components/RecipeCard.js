import React from 'react'

const RecipeCard = props => {

    return (
        <div>
            <img src={props.recipe.image_url} alt="Food pic" />
            <p>{props.recipe.title}</p>
            <p>Recipe provided by {props.recipe.publisher}</p>
            <button type="button">Recipe Details</button>
        </div>
    )
}

export default RecipeCard;