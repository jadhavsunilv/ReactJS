import { combineReducers } from 'redux';
import userReducer from '../Redux/User/userReducer';
import productsReducer from '../../src/Redux/Product/ProductReducer'

export default combineReducers({
  user: userReducer,
  productsData: productsReducer,
});