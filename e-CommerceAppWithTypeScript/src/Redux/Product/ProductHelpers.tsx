import {firestore} from "../../../src/firebase/utils"
import { iProduct } from "../../Model/product";

export const handleAddProduct = (product:iProduct) => {
console.log("producthelper",product)
    return new Promise((resolve, reject) => {
      firestore
        .collection('products')
        .doc()
        .set(product)
        .then(() => {
          resolve(product);
        })
        .catch(err => {
          reject(err);
        })
    });
  }
  export const handleFetchProducts = () => {
    return new Promise((resolve, reject) => {
      firestore
        .collection('products')
        .get()
        .then(snapshot => {
          const productsArray = snapshot.docs.map(doc => {
            return {
              ...doc.data(),
              documentID: doc.id
            }
          });
          resolve(productsArray);
        })
        .catch(err => {
          reject(err);
        })
    })
  }
  export const handleDeleteProduct = (documentID:any) => {
    console.log(documentID, 1)
    return new Promise((resolve, reject) => {
      firestore
        .collection('products')
        .doc(documentID)
        .delete()
        .then(() => {
          console.log(documentID, 2)
          resolve(documentID);
        })
        .catch(err => {
          reject(err);
        })
    });
  }