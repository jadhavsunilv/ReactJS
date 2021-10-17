 
import { ActionType,Action } from "../../action-type"
 
  const initialState = {
    loading: false,
    authData: [],
    error: ''
  }

export const authReducer=(state=initialState,action:Action)=>{
    switch (action.type) {
        case ActionType.FETCH_AUTH_REQUEST:
          return {
            ...state,
            loading: true
          }
        case ActionType.FETCH_AUTH_SUCCESS:
          return {
            loading: false,
            authData: action.payload,
            error: ''
          }
        case ActionType.FETCH_AUTH_FAILURE:
          return {
            loading: false,
            authData: [],
            error: action.payload
          }
        default: return state
      }
    
}
