export const setFavorites = favorites => {
    return {
        type: "SET_FAVORITES",
        favorites
    }
}

export const addFavorite = favorite => {
    return {
        type: "ADD_FAVORITE",
        favorite
    }
}

export const clearFavorites = () => {
    return {
        type: "CLEAR_FAVORITES"
    }
}

export const getFavorites = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/favorites", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(r => r.json())
        .then(r => {
            if (r.error) {
                alert(r.error)
            } else {
                dispatch(setFavorites(r.data))
            }
        })
        .catch(console.log)
    }
}

export const addRecipeToFavorites = (recipe) => {
    console.log(recipe)
    return dispatch => {
        const recipeInfo = {
            recipe_title: recipe.title,
            recipe_identifier: recipe.id,
            recipe_image: recipe.image
        }
        console.log(recipeInfo)
        return fetch("http://localhost:3001/api/v1/recipes", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipeInfo)
        })
        .then(r => r.json())
        .then(r => {
            if (r.error) {
                alert(r.error)
            } else {
                dispatch(getFavorites())
                alert('Saved to Favorites!')
            }
        })
        .catch(console.log)
    }
}

export const deleteFavoriteSuccess = favoriteId => {
    return {
      type: "DELETE_FAVORITE",
      favoriteId
    }
  }

export const deleteFavorite = (favoriteId, history) => {
    return dispatch => {
      return fetch(`http://localhost:3001/api/v1/favorites/${favoriteId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            alert(resp.error)
          } else {
            dispatch(deleteFavoriteSuccess(favoriteId))
            history.push(`/favorites`)
          }
        })
        .catch(console.log)
  
    }
  
  }