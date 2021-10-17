//import { * as api } from '../../api/customerApi'
import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { ActionType, FoodItemAction } from "../../action-type/foodItemAction-Type";
import{IfoodItem } from '../../../Models/foodItem/foodItem'
 
const BASE_URL = 'http://localhost:5000/api/';  

export const getFoodItems = () => {
 debugger
    return (dispatch:Dispatch<FoodItemAction>) => {
      
        let url = BASE_URL +'FoodItem';
      dispatch({ type: ActionType.FETCH_FOODITEM_REQUEST,payload:ActionType.FETCH_FOODITEM_REQUEST})
      axios.get(url)
        .then((response : AxiosResponse<IfoodItem[]>)=> {
          debugger
          dispatch({
               type:  ActionType.FETCH_FOODITEM_SUCCESS,
               payload:response.data
            } )
          //onSuccess() */fetchCustomerSuccess(response.data) import{IfoodItem } from '../../Models/foodItem/foodItem'
        })
        .catch(error => {
          
          dispatch( {
            type: ActionType.FETCH_FOODITEM_FAILURE,
            payload: error
          })
        })
    }
  }
   


   