export default (state=[], action) => {
    switch (action.type) {
      case "UPDATE_SIGNUP_FORM":
        return action.formData
      case "RESET_SIGNUP_FORM":
        return []
      default:
        return state
    }
  }