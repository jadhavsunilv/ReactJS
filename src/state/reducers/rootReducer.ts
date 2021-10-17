
import { combineReducers } from 'redux' 
import{authReducer} from './auth/authReducer'
import{customerReducer} from './customer/customerReducer'
import{orderMasterReducer} from './orderMaster/orderMasterReducer'
import{foodItemReducer} from './foodItem/foodItemReducer'
const rootReducer = combineReducers({
    customerData:customerReducer,
    orderMaster:orderMasterReducer,
    foodItems:foodItemReducer
})

export default rootReducer