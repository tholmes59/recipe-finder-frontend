export default (state = [], action) => {
    switch (action.type) {
      case "UPDATE_LOGIN_FORM":
        return action.formData
      case "RESET_LOGIN_FORM":
        return []
      default:
        return state
    }
  }