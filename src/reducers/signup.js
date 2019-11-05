export default (state=[], action) => {
    switch (action.type) {
      case "RESET_SIGNUP_FORM":
        return []
      default:
        return state
    }
  }