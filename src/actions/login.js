export const updateLogin = (formData) => {
    return {
      type: "UPDATE_LOGIN_FORM",
      formData
    }
  }
  
  export const resetLogin = () => {
    return {
      type: "RESET_LOGIN_FORM"
    }
  }