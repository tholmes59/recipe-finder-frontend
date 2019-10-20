import React from 'react'
import { connect } from 'react-redux'
import { fetchRecipe } from '../actions/recipeSearch'
import { addRecipeToFavorites } from '../actions/favorites'

class ListRecipe extends React.Component {

    // componentDidMount() {
    //     this.props.fetchRecipe(this.props.recipeItems && this.props.recipeItems.recipe_id);
    // }

    handleClick = event => {
        event.preventDefault()
        this.props.addRecipeToFavorites(this.props.recipeItems)
    }

    render() {
        // console.log(this.props.recipeItems.recipe)
        return (
            <div>
               <h1>{this.props.recipeItems && this.props.recipeItems.title}</h1>
               <img src={this.props.recipeItems && this.props.recipeItems.image_url} alt="Recipe" />
               <h3>Ingredients</h3>
               {this.props.recipeItems && this.props.recipeItems.ingredients.map((item, index) => {
                   return (
                   <ul key={index}>
                       {item}
                   </ul>
                   )
               })}
               <a href={this.props.recipeItems && this.props.recipeItems.source_url} target="_blank" rel="noopener noreferrer">Full Recipe Here</a><br/>
               <button onClick={this.handleClick}>Add to Favorites</button>
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