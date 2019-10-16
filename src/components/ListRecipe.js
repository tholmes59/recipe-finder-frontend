import React from 'react'
import { connect } from 'react-redux'
import { fetchRecipe } from '../actions/recipeSearch'

class ListRecipe extends React.Component {

    // componentDidMount() {
    //     this.props.fetchRecipe(this.props.recipe.recipe_id)  
    // }
    

    render() {
        // console.log(this.props.recipeItems.recipe)
        return (
            <div>
               <h1>{this.props.recipeItems && this.props.recipeItems.title}</h1>
               <img src={this.props.recipeItems && this.props.recipeItems.image_url} alt="Recipe" />
               <h3>Ingrediants</h3>
               {this.props.recipeItems && this.props.recipeItems.ingredients.map((item, index) => {
                   return (
                   <ul key={index}>
                       {item}
                   </ul>
                   )
               })}
               <a href={this.props.recipeItems && this.props.recipeItems.source_url} target="_blank" rel="noopener noreferrer">Full Recipe Here</a>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipeItems: state.recipeSearch.recipe
    }
    
}

export default connect(mapStateToProps, { fetchRecipe })(ListRecipe);