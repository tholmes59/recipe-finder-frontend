import React from 'react'
import RecipeCard from './RecipeCard'
import { connect} from 'react-redux'


const SearchResults = props => {
        
    const recipeCards = props.recipes.length > 0 ? props.recipes.map(recipe => <RecipeCard key={recipe.recipe_id} recipe={recipe} />) : null;
        
    return (
        <div className="recipeCard-container">
               {recipeCards}
        </div>
    )
    }

const mapStateToProps = state => {
    return {
        recipes: state.recipeSearch
    }
}

export default connect(mapStateToProps)(SearchResults);