import { combineReducers } from 'redux'
import {customerReducer} from './customer/customerReducer'
import{foodItemsReducer} from './foodItems/foodItemReducer'
import{orderFoodReducer} from './order/orderFoodReducer'
const rootReducer = combineReducers({
  customers: customerReducer,
  foodItems:foodItemsReducer,
  orderFoodItems:orderFoodReducer
  
})

export default rootReducer