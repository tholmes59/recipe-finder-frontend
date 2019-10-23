import React from 'react'
import { connect } from 'react-redux'
import { fetchRecipe } from '../actions/recipeSearch'
import { addRecipeToFavorites } from '../actions/favorites'

class ListRecipe extends React.Component {

    // componentDidMount() {
    //     this.props.fetchRecipe(this.props.recipeItems && this.props.recipeItems.recipe_id);
    //     fetchRecipe(this.props.match.params.id)
    // }

    handleClick = event => {
        event.preventDefault()
        this.props.addRecipeToFavorites(this.props.recipeItems)
    }

    render() {
        return (
            <div>
               <h1>{this.props.recipeItems && this.props.recipeItems.title}</h1>
               <img src={this.props.recipeItems && this.props.recipeItems.image} alt="Recipe" />
               <h3>Ingredients</h3>
               {this.props.recipeItems && this.props.recipeItems.extendedIngredients.map((item, index) => {
                   console.log(item.original)
                   return (
                   <ul key={index}>
                       {item.original}
                   </ul>
                   )
               })}
               <a href={this.props.recipeItems && this.props.recipeItems.sourceUrl} target="_blank" rel="noopener noreferrer">Full Recipe Here</a><br/>
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