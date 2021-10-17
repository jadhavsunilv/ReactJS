 
import { ActionType,Action } from "../../action-type/orderMasterAction-Type"
 
const initialState = {
  loading: false,
  orderMasterData: [],
  error: ''
}

export const orderMasterReducer=(state=initialState,action:Action)=>{
  switch (action.type) {
      case ActionType.FETCH_ORDERMASTER_REQUEST:
        return {
          ...state,
          loading: true
        }
      case ActionType.FETCH_ORDERMASTER_SUCCESS:
        return {
          loading: false,
          orderMasterData: action.payload,
          error: ''
        }
      case ActionType.FETCH_ORDERMASTER_FAILURE:
        return {
          loading: false,
          orderMasterData: [],
          error: action.payload
        }
      default: return state
    }
  
}
