 
import { ActionType,Action } from "../../action-type/customerAction-Type"
 
const initialState = {
  loading: false,
  customers: [],
  error: ''
}

export const customerReducer=(state=initialState,action:Action)=>{
  switch (action.type) {
      case ActionType.FETCH_CUSTOMER_REQUEST:
        return {
          ...state,
          loading: true
        }
      case ActionType.FETCH_CUSTOMER_SUCCESS:
        return {
          loading: false,
          customers: action.payload,
          error: ''
        }
      case ActionType.FETCH_CUSTOMER_FAILURE:
        return {
          loading: false,
          customers: [],
          error: action.payload
        }
      default: return state
    }
  
}
