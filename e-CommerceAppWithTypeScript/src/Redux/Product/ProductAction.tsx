import productTypes from '../Product/ProductTypes';
import {handleAddProduct,handleFetchProducts,handleDeleteProduct} from '../Product/ProductHelpers';
import { iProduct} from '../../Model/product';

export const addProduct = (product:iProduct) => async (dispatch:any,productData:any) => {
  console.log("Product data Action ",product)
    try {
    const timestamp = new Date();
    const configModal = {
      ...product,
      createdDate: timestamp
     };
    await handleAddProduct({...configModal});
      dispatch({
        type: productTypes.ADD_NEW_PRODUCT_START,
        payload: productData
      });
    } catch (err) {
      // console.log(err);
    }
  };

  export const setProducts = (products:iProduct) => ({
    type: productTypes.SET_PRODUCTS,
    payload: products
  });

  export const fetchProducts=(payload:any)=> async (dispatch:any,productID:any)=>{
    try {
      const products = await handleFetchProducts();
      dispatch({
        type: productTypes.SET_PRODUCTS,
        payload: products
      });
      dispatch({
        type: productTypes.FETCH_PRODUCTS_START,
      });
    } catch (err) {
      // console.log(err);
    }
  }
  export const deleteProductStart=(payload:any)=> async (dispatch:any,productID:any,products:iProduct)=>{
    try {
      // debugger
       await handleDeleteProduct(payload);
       dispatch(fetchProducts(products));
      dispatch({
        type: productTypes.DELETE_PRODUCT_START,
        payload: productID
      });
    } catch (err) {
      // console.log(err);
    }
  }