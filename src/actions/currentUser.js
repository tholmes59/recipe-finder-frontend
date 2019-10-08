import { resetLogin } from "./login.js"

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
                dispatch(resetLogin())
                history.push('/')
            }
        })
        .catch(console.log)     
    }
}
