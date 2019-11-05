import { resetLogin } from "./login.js"
import { resetSignup } from './signup.js'
import { getFavorites, clearFavorites } from "./favorites.js"
import { clearRecipes } from './recipeSearch'

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

export const login = (credentials, history) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials)
        })
        .then(r => r.json())
        .then(r => {   
            if (r.error) {
                alert(r.error)
            } else {
                dispatch(setCurrentUser(r.data))
                dispatch(getFavorites())
                dispatch(resetLogin())
                history.push('/search')
            }
        })
        .catch(console.log)     
    }
}

export const logout = () => {
    return dispatch => {
      dispatch(clearCurrentUser())
      dispatch(clearFavorites())
      return fetch('http://localhost:3001/api/v1/logout', {
        credentials: "include",
        method: "DELETE"
      })
      .then(r => r.json())
      .then(r => {
        if (r.error) {
          alert(r.error)
        } else {
          dispatch(clearRecipes())
        }
      })
      .catch(console.log)
    }
  }

  export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/get_current_user", {
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
                dispatch(setCurrentUser(r.data))
                dispatch(getFavorites())
            }
        })
        .catch(console.log)     
    }
}

export const signup = (credentials, history) => {
    return dispatch => {
      const userInfo = {
        user: credentials
      }
      return fetch("http://localhost:3001/api/v1/signup", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data))
            dispatch(getFavorites())
            dispatch(resetSignup())
            history.push('/search')
          }
        })
        .catch(console.log)
    }
  }