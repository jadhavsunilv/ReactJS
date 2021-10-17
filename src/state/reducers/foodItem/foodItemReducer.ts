 
import { ActionType,FoodItemAction } from "../../action-type/foodItemAction-Type"
 
const initialState = {
  loading: false,
  foodItems: [],
  error: ''
}

export const foodItemReducer=(state=initialState,action:FoodItemAction)=>{
  switch (action.type) {
      case ActionType.FETCH_FOODITEM_REQUEST:
        return {
          ...state,
          loading: true
        }
      case ActionType.FETCH_FOODITEM_SUCCESS:
        return {
          loading: false,
          foodItems: action.payload,
          error: ''
        }
      case ActionType.FETCH_FOODITEM_FAILURE:
        return {
          loading: false,
          foodItems: [],
          error: action.payload
        }
      default: return state
    }
  
}
