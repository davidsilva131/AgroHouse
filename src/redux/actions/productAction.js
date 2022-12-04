import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
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

export const updateProdutAsync = (product, id) => {
  return async (dispatch) => {
    try {
      const restaurantRef = doc(database, collectionName, id)
      const docs = await updateDoc(restaurantRef, {
        ...product
      })
    } catch (error) {
      console.log(error)
    }
    finally {
      dispatch(updateProductSync(product))
    }
  }
}

const updateProductSync = (product) => {
  return {
    type: productTypes.UPDATE_PRODUCT,
    payload: product
  }
}

export const deleteProductAsync = (id) => {
  return async (dispatch) => {
    try {
      await deleteDoc(doc(database, collectionName, id))
    } catch (error) {
      console.log(error)
    }
  }
}