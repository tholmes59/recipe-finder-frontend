export const updateSignup = formData => {
    return {
      type: "UPDATE_SIGNUP_FORM",
      formData
    }
  }
  
  export const resetSignup = () => {
    return {
      type: "RESET_SIGNUP_FORM"
    }
  }