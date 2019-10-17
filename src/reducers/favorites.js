export default (state = [], action) => {
    switch (action.type) {
        case "SET_FAVORITES":
            return action.favorites
        case "ADD_FAVORITE":
            return action.favorite
        case "CLEAR_FAVORITES":
            return []
        default:
            return state
    }
}