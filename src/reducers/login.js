export default (state = [], action) => {
    switch (action.type) {
      case "RESET_LOGIN_FORM":
        return []
      default:
        return state
    }
  }