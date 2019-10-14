export default (state = [], action) => {
    switch (action.type) {
        case 'LIST_RECIPES':
            return action.recipes
        case 'DISPLAY_RECIPE':
            return {...state, recipe: action.recipeItems}
        
        default:
            return state
    }
}