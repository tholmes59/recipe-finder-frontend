const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
export const listRecipes = recipes => {
    return {
        type: 'LIST_RECIPES',
        recipes
    }
}

export const searchRecipe = search => {
    return (dispatch) => {
        return fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${search}`)
        .then(r => r.json())
        .then(recipes => {
          console.log(recipes.recipes)
            if (recipes.error) {
              alert(recipes.error)
            } else {
              dispatch(listRecipes(recipes.recipes))
              
            }
          })
        .catch(console.log)  
    }
}