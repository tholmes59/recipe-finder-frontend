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
        return fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${search}`)
        .then(r => r.json())
        .then(recipes => {
          // console.log(recipes.recipes)
            if (recipes.error) {
              alert(recipes.error)
            } else {
              dispatch(listRecipes(recipes.recipes))
              
            }
          })
        .catch(console.log)  
    }
}

export const fetchRecipe = id => {
  return (dispatch) => {
      return fetch(`https://www.food2fork.com/api/get?key=${API_KEY}&rId=${id}`)
      .then(r => r.json())
      .then(recipeItems => {
        // console.log(recipeItems.recipe)
          if (recipeItems.error) {
            alert(recipeItems.error)
          } else {
            dispatch(displayRecipe(recipeItems.recipe))
            
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