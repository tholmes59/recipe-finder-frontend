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
                Hello from Reicpe!
               {this.props.recipeItems && this.props.recipeItems.title}
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