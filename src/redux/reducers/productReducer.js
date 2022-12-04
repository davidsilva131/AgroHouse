import { productTypes } from "../types/productTypes"

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case productTypes.CREATE_PRODUCT:
      return {
        ...action.payload,
      }

    default:
      return state
  }


}