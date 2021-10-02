//import { * as api } from '../../api/customerApi'
import axios from "axios";
export const FETCH_FOODITEMS_REQUEST = 'FETCH_FOODITEMS_REQUEST'
export const FETCH_FOODITEMS_SUCCESS = 'FETCH_FOODITEMS_SUCCESS'
export const FETCH_FOODITEMS_FAILURE = 'FETCH_FOODITEMS_FAILURE'
export const fetchFoodItemsRequest = () => {
    
    return {
      type: FETCH_FOODITEMS_REQUEST
    }
  }
  
  export const fetchFoodItemsSuccess = FoodItems => {
    return {
      type: FETCH_FOODITEMS_SUCCESS,
      payload: FoodItems
    }
  }
  
  export const fetchFoodItemsFailure = error => {
    return {
      type: FETCH_FOODITEMS_FAILURE,
      payload: error
    }
  }
  
  const BASE_URL = 'http://localhost:36971/api/';  
export const fetchFoodItems = () => {
    debugger
    let url = BASE_URL +'FoodItem';
    return (dispatch) => {
        debugger
      dispatch(fetchFoodItemsRequest())
      axios.get(url)
        .then(response => {
            debugger
          // response.data is the users
          const FoodItems = response.data
          dispatch(fetchFoodItemsSuccess(FoodItems))
          
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchFoodItemsFailure(error.message))
        })
    }
  }

   


   