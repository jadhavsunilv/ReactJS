import {ActionType,Action} from "../action-type"
import { Dispatch } from 'redux'
import axios from "axios";
 
const BASE_URL = 'http://localhost:36971/api/';  
export const postAuth = (newData: any,onSuccess: () => void) => {
  //newRecord ,onSuccess
    return (dispatch:Dispatch<Action>) => {
      debugger
        let url = BASE_URL +'Auth';
      dispatch({ type: ActionType.FETCH_AUTH_REQUEST,payload:ActionType.FETCH_AUTH_REQUEST})
      //url, newRecord newRecord
       axios.post(url,newData)
        .then(response => {
         
          dispatch( {
            type:  ActionType.FETCH_AUTH_SUCCESS,
            payload:response.data
          })
          onSuccess()
        })
        .catch(error => {
          // error.message is the error message
          dispatch( {
            type: ActionType.FETCH_AUTH_FAILURE,
            payload: error
          })
        })
    }
  }