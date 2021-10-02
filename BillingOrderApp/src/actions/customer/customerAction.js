//import { * as api } from '../../api/customerApi'
import axios from "axios";
export const FETCH_USERS_REQUEST = 'FETCH_CUSTOMER_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_CUSTOMER_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_CUSTOMER_FAILURE'
export const fetchCustomerRequest = () => {
    
    return {
      type: FETCH_USERS_REQUEST
    }
  }
  
  export const fetchCustomerSuccess = customers => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: customers
    }
  }
  
  export const fetchCustomerFailure = error => {
    return {
      type: FETCH_USERS_FAILURE,
      payload: error
    }
  }
  
  const BASE_URL = 'http://localhost:36971/api/';  
export const fetchAllCustomer = () => {
    debugger
    return (dispatch) => {
        debugger
        let url = BASE_URL +'Customer';
      dispatch(fetchCustomerRequest())
      axios.get(url)
        .then(response => {
       
          let customerList=response.data.map( item=>({
            id: item.customerID,
            title: item.customerName
        }))
        customerList=[{id:0,title:"--Select--"}].concat(customerList);
        
          dispatch(fetchCustomerSuccess(customerList))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchCustomerFailure(error.message))
        })
    }
  }
   