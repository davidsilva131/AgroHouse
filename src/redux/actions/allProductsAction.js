import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase/firebaseConfig";
import { allProductsTypes } from "../types/allProductsTypes";

const collectionName = 'products'
const productsCollection = collection(database, collectionName);

export const getOwnProductsAsync = (uid) => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(productsCollection)
    const products = []
    try {
      querySnapshot.forEach(element => {
        if (element.data().owner === uid) {
          const product = {
            id: element.id,
            ...element.data()
          }
          products.push(product)
        }
      })
    } catch (error) {

    } finally {
      dispatch(getOwnProductsSync(products))
    }
  }
}
const getOwnProductsSync = (products) => {
  return {
    type: allProductsTypes.GET_OWN_PRODUCTS,
    payload: products
  }
}

