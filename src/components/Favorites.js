import React from 'react' 
import { connect } from 'react-redux'
import FavoritesCard from './FavoritesCard'

const Favorites = props => {

    const favoritesCards = props.favorites.length > 0 ? props.favorites.map(favorite => <FavoritesCard key={favorite.id} favorite={favorite} />) : 'No Favorites';
    return (
        <div>
            {favoritesCards}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}
export default connect(mapStateToProps)(Favorites);