const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
export const listRecipes = recipes => {
    return {
        type: 'LIST_RECIPES',
        recipes
    }
}

export const searchRecipe = query => {
    return (dispatch) => {
        return fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${query}`)
        .then(r => r.json())
        .then(data => {
            if (data.error) {
              alert(data.error)
            } else {
              dispatch(listRecipes(data))
            }
          })
        .catch(console.log)  
        
    }
}