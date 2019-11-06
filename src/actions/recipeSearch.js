const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
export const listRecipes = recipes => {
    return {
        type: 'LIST_RECIPES',
        recipes
    }
}

export const displayRecipe = recipeItems => {
  return {
      type: 'DISPLAY_RECIPE',
      recipeItems
  }
}

export const searchRecipe = search => {
    return (dispatch) => {
        return fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${search}&number=20&apiKey=${API_KEY}`)
        .then(r => r.json())
        .then(recipes => {
          // console.log(recipes)
            if (recipes.error) {
              alert(recipes.error)
            } else {
              dispatch(listRecipes(recipes))
              
            }
          })
        .catch(console.log)  
    }
}

export const fetchRecipe = id => {
  return (dispatch) => {
      return fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
      .then(r => r.json())
      .then(recipeItems => {
        // console.log(recipeItems)
          if (recipeItems.error) {
            alert(recipeItems.error)
          } else {
            dispatch(displayRecipe(recipeItems))
            
          }
        })
      .catch(console.log)  
  }
}

export const clearRecipes = () => {
  return {
    type: "CLEAR_RECIPES"
  }
}