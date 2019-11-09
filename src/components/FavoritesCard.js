import React from 'react'
import { connect } from 'react-redux'
import { fetchRecipe } from '../actions/recipeSearch'
import { deleteFavorite} from '../actions/favorites'
import { Link } from 'react-router-dom'

// const FavoritesCard = props => {
class FavoritesCard extends React.Component {

    handleClick = event => {
        event.preventDefault()
        this.props.fetchRecipe(this.props.favorite.attributes.recipe_identifier)
    }

    handleDelete = event => {
        event.preventDefault()
        this.props.deleteFavorite(this.props.favorite.id, this.props.history)
    }
    render() {
        return (
            <div className="favoritesCard">
                <img src={this.props.favorite.attributes.recipe_image} alt="Food pic" className="favoritesCard-img"/><br/><br/>
                <p>{this.props.favorite.attributes.recipe_title}</p><br/>
                <button type="button" onClick={this.handleClick} className="favoritesCard-button"><Link className="favorites-linkbutton" to={`/recipe/${this.props.favorite.attributes.recipe_identifier}`}>View Recipe</Link></button><br/>
                <button type="button" onClick={this.handleDelete} className="favoritesCard-button">Remove from Favorites</button>
            </div>
        )

    }
}

export default connect(null, { fetchRecipe, deleteFavorite })(FavoritesCard);