//import { * as api } from '../../api/customerApi'
import axios from "axios";
export const FETCH_ORDERFOODITEMS_REQUEST = 'FETCH_ORDERFOODITEMS_REQUEST'
export const FETCH_ORDERFOODITEMS_SUCCESS = 'FETCH_ORDERFOODITEMS_SUCCESS'
export const FETCH_ORDERFOODITEMS_FAILURE = 'FETCH_ORDERFOODITEMS_FAILURE'
export const fetchOrderFoodItemsRequest = () => {
    return {
      type: FETCH_ORDERFOODITEMS_REQUEST
    }
  }
  
  export const fetchOrderFoodItemsSuccess = OrderFoodItems => {
    return {
      type: FETCH_ORDERFOODITEMS_SUCCESS,
      payload: OrderFoodItems
    }
  }
  
  export const fetchOrderFoodItemsFailure = error => {
    return {
      type: FETCH_ORDERFOODITEMS_FAILURE,
      payload: error
    }
  }
  
  const BASE_URL = 'http://localhost:36971/api/';  
  export const fetchOrderFoodItems = () => {
    debugger
    let url = BASE_URL +'Order';
    return (dispatch) => {
        debugger
      dispatch(fetchOrderFoodItemsRequest())
      axios.get(url)
        .then(response => {
            debugger
          // response.data is the users
          const OrderFoodItems = response.data
          dispatch(fetchOrderFoodItemsSuccess(OrderFoodItems))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchOrderFoodItemsFailure(error.message))
        })
    }
  }

  export const deleteOrderFoodItems = (id) => {
    debugger
    let url = BASE_URL +'Order/'+id;
    return (dispatch) => {
        debugger
      dispatch(fetchOrderFoodItemsRequest())
      axios.delete(url)
        .then(response => {
            debugger
          // response.data is the users
          const OrderFoodItems = response.data
          dispatch(fetchOrderFoodItemsSuccess(OrderFoodItems))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchOrderFoodItemsFailure(error.message))
        })
    }
  }
  export const createOrderFoodItems = (newRecord ,onSuccess) => {
    
    let url = BASE_URL +'Order';
    return (dispatch) => {
        
      dispatch(fetchOrderFoodItemsRequest())
      axios.post(url,newRecord)
        .then(response => {
         
          // response.data is the users
          const OrderFoodItems = response.data
          dispatch(fetchOrderFoodItemsSuccess(OrderFoodItems))
          onSuccess()
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchOrderFoodItemsFailure(error.message))
        })
    }
  }
  export const fetchOrderFoodItemsById = (orderId ,onSuccess) => {
    debugger
    let url = BASE_URL +'Order/'+orderId
    return (dispatch) => {
        debugger
      dispatch(fetchOrderFoodItemsRequest())
      axios.get(url)
        .then(response => {
            debugger
          // response.data is the users
          const OrderFoodItems = response.data
          dispatch(fetchOrderFoodItemsSuccess(OrderFoodItems))
          onSuccess(OrderFoodItems)
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchOrderFoodItemsFailure(error.message))
        })
    }
  }

  export const updateOrderFoodItems = (orderMasterId,updatedRecord,onSuccess) => {
    
    let url = BASE_URL +'Order/'+orderMasterId;
    return (dispatch) => {
        
      dispatch(fetchOrderFoodItemsRequest())
       debugger
      axios.put(url,updatedRecord)
        .then(response => {
         
          // response.data is the users
          const OrderFoodItems = response.data
          dispatch(fetchOrderFoodItemsSuccess(OrderFoodItems))
          onSuccess()
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchOrderFoodItemsFailure(error.message))
        })
    }
  }