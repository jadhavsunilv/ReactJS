import {ActionType,Action} from "../../action-type/customerAction-Type"
import { Dispatch } from 'redux'
import axios, { AxiosResponse } from "axios";
import {iCustomer} from '../../../Models/customer/customer'
export const fetchCustomerRequest = () => {
    
  return {
    type: ActionType.FETCH_CUSTOMER_REQUEST
  }
}

export const fetchCustomerSuccess = (customers:iCustomer[] ) => {
  return {
    type:  ActionType.FETCH_CUSTOMER_SUCCESS,
    payload: customers
  }
}

export const fetchCustomerFailure = (error: any) => {
  return {
    type: ActionType.FETCH_CUSTOMER_FAILURE,
    payload: error
  }
}
const BASE_URL = 'http://localhost:5000/api/';  
export const getCustomers = () => {
 debugger
    return (dispatch:Dispatch<Action>) => {
      
      let url = BASE_URL +'Customer';
      dispatch({ type: ActionType.FETCH_CUSTOMER_REQUEST,payload:ActionType.FETCH_CUSTOMER_REQUEST})
      axios.get(url)
        .then((response : AxiosResponse<iCustomer[]>) => {
          debugger
          dispatch({
               type:  ActionType.FETCH_CUSTOMER_SUCCESS,
               payload:response.data
            } )
          //onSuccess() */fetchCustomerSuccess(response.data)
        })
        .catch(error => {
          dispatch( {
            type: ActionType.FETCH_CUSTOMER_FAILURE,
            payload: error
          })
        })
    }
  }

  /*
https://www.codefeetime.com/post/typescript-class-or-interface-for-model/
 axios
      .get('some url to api')
      .then((res: AxiosResponse<ICompany>) => {
        setData(res.data);
      })

  */