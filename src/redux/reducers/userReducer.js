import { userTypes } from "../types/userTypes"

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case userTypes.USER_REGISTER:

      return {
        ...action.payload,
      }
    case userTypes.LOGIN_USER:
      return {
        ...state,
        ...action.payload,
      }
    case userTypes.USER_LOGOUT:
      return {}

    default:
      return state
  }


}