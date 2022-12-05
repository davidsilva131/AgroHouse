import { allProductsTypes } from "../types/allProductsTypes"

export const allProductsReducer = (state = [], action) => {
  switch (action.type) {
    case allProductsTypes.GET_OWN_PRODUCTS:
      return [
        ...action.payload
      ]

    default:
      return state
  }


}