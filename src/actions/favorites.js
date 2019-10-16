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
        return fetch("http://loaclhost:3001/api/v1/favorites", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-type": "application/json"
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

export const addRecipeToFavorits = (recipe) => {
    return dispatch => {
        const recipeInfo = {
            title: recipe.title,
            recipe_identifier: recipe.recipe_identifier
        }
        return fetch("http://loaclhost:3001/api/v1/recipes", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(recipeInfo)
        })
        .then(r => r.json())
        .then(r => {
            if (r.error) {
                alert(r.error)
            } else {
                dispatchEvent(getFavorites())
                alert('Saved to Favorites!')
            }
        })
        .catch(console.log)
    }
}