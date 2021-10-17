import { Dispatch } from 'redux'
import {ActionType,Action} from "../../action-type/orderMasterAction-Type"
import {IOrderMaster, OrderMaster} from "../../../Models/orderMaster/orderMaster"
import { IfoodItem } from '../../../Models/foodItem/foodItem';

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export const getOrderMater = ( ) => {
    return (dispatch:Dispatch<Action>) => {
      debugger
      //let ordeMasterData=getFreshModelObect();
     let ordeMasterData=new  OrderMaster()
      delay(500).then(() => {
        dispatch( {
            type:  ActionType.FETCH_ORDERMASTER_SUCCESS,
            payload:ordeMasterData
          })
        })
          
          
    }
  }

  export const addItemToMasterorderDetails = ( orderMasterData:any ,itemDetails:any) => {
      return (dispatch:Dispatch<Action>) => {
        delay(500).then(() => {
          dispatch( {
              type:  ActionType.FETCH_ORDERMASTER_SUCCESS,
              payload:{ ...orderMasterData,
              orderDetails: [...orderMasterData.orderDetails, itemDetails]}
            })
          })
            
      }
    }
    export const removeItemToMasterorderDetails = ( orderMasterData:IOrderMaster ,foodItem:IfoodItem) => {
      return (dispatch:Dispatch<Action>) => {
        delay(500).then(() => {
          dispatch( {
              type:  ActionType.FETCH_ORDERMASTER_SUCCESS,
              payload:{  ...orderMasterData,
                orderDetails:orderMasterData.orderDetails.filter(x=>x.foodItemId != foodItem.foodItemId) }
            })
          })
            
      }
    }
    export const updateQuantity = ( orderMasterData:IOrderMaster ,itemDetails:IfoodItem) => {
      return (dispatch:Dispatch<Action>) => {
        delay(500).then(() => {
          dispatch( {
              type:  ActionType.FETCH_ORDERMASTER_SUCCESS,
              payload:{  ...orderMasterData,
                orderDetails:itemDetails }
            })
          })
            
      }
    }
 export const updateOrderMaterOrder = ( orderMasterData:IOrderMaster,fieldName:string ,value:any) => {
      return (dispatch:Dispatch<Action>) => {
          
        delay(500).then(() => {
            dispatch( {
              type:  ActionType.FETCH_ORDERMASTER_SUCCESS,
              payload:{ ...orderMasterData,     //Set data in to existing array (getFreshModelObect) with orderDetails 
                [fieldName]: value
              }
           })
        })
  }
}

 



 