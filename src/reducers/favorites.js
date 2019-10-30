export default (state = [], action) => {
    switch (action.type) {
        case "SET_FAVORITES":
            return action.favorites
        case "ADD_FAVORITE":
            return action.favorite
        case "DELETE_FAVORITE":
            return state.filter(favorite => favorite.id === action.favoriteId ? false : true)
        case "CLEAR_FAVORITES":
            return []
        default:
            return state
    }
}