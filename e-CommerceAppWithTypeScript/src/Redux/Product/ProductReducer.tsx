 import productTypes from '../Product/ProductTypes'
 
const INITIAL_STATE = {
  products: [],
  product: {},
  };

const userReducer = (state=INITIAL_STATE, action:any) => {
    switch(action.type) {
      case productTypes.SET_PRODUCTS:
        return {
          ...state,
          products: action.payload
        }
      default:
        return state;
    }
  };
  
  export default userReducer;