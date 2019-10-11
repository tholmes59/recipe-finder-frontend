export default (state = [], action) => {
    switch (action.type) {
        case 'LIST_RECIPIES':
            return action.recipies.results

        default:
            return state
    }
}