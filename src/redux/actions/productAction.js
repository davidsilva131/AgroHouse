import { addDoc, collection } from "firebase/firestore";
import { database } from "../../firebase/firebaseConfig";
import { productTypes } from "../types/productTypes";

const collectionName = 'products'

export const addProductAsync = (product) => {
  console.log(product);
  return async (dispatch) => {
    try {
      const productsCollection = collection(database, collectionName);
      const docs = await addDoc(productsCollection, product);
      dispatch(addProductSync({ id: docs.id, ...product }));
    } catch (error) {
      console.log(error);
      dispatch(addProductSync({}));
    }
  }
}

const addProductSync = (product) => {
  return {
    type: productTypes.CREATE_PRODUCT,
    payload: product
  }
}