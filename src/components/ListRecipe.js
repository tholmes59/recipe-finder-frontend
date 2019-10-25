import React from 'react'
import { connect } from 'react-redux'
import { fetchRecipe } from '../actions/recipeSearch'
import { addRecipeToFavorites } from '../actions/favorites'

class ListRecipe extends React.Component {

    handleClick = event => {
        event.preventDefault()
        this.props.addRecipeToFavorites(this.props.recipeItems)
    }

    render() {
        return (
            <div className="recipe-container">
                <div className="recipe-image-container">
                    <img src={this.props.recipeItems && this.props.recipeItems.image} alt="Recipe" className="recipe-img"/> 
                </div>
                <div className="recipe-info-container">
                    <h1>{this.props.recipeItems && this.props.recipeItems.title}</h1>
                    <button className="recipe-button"><a className="recipe-linkbutton" href={this.props.recipeItems && this.props.recipeItems.sourceUrl} target="_blank" rel="noopener noreferrer">Full Recipe Here</a></button><br/>
                    <button className="recipe-button" onClick={this.handleClick}>Add to Favorites</button>
                </div>
                <div className="recipe-ingredients-container">
                    <h3>Ingredients</h3>
                    {this.props.recipeItems && this.props.recipeItems.extendedIngredients.map((item, index) => {
                        return (
                        <ul key={index}>
                            {item.original}
                        </ul>
                        )
                    })}
                </div>
                <div className="recipe-instructions-container">
                    <h3>Instructions</h3>
                    {this.props.recipeItems && this.props.recipeItems.analyzedInstructions.map((item) => {
                        return (
                            item.steps.map((newItem, index) => {
                                return (
                                <ul key={index}>
                                    <h3>Step {newItem.number}:</h3>
                                    <p>{newItem.step}</p>
                                </ul>
                                )
                            })
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipeItems: state.recipeSearch.recipe
    }
    
}

export default connect(mapStateToProps, { fetchRecipe, addRecipeToFavorites })(ListRecipe);