import { type } from "os";
import { Dispatch } from "react";
import{IfoodItem } from '../../Models/foodItem/foodItem'
export enum ActionType{
    FETCH_FOODITEM_REQUEST = 'FETCH_FOODITEM_REQUEST',
    FETCH_FOODITEM_SUCCESS = 'FETCH_FOODITEM_SUCCESS',
    FETCH_FOODITEM_FAILURE = 'FETCH_FOODITEM_FAILURE'
}

interface IfetchFoodItemRequest{
    type:ActionType.FETCH_FOODITEM_REQUEST,
    payload:string
}
interface IfetchFoodItemSuccess{
    type:ActionType.FETCH_FOODITEM_SUCCESS,
    payload:IfoodItem[]
}
interface IfetchFoodItemFailure{
    type:ActionType.FETCH_FOODITEM_FAILURE,
    payload:string
}
export type FoodItemAction =IfetchFoodItemRequest|IfetchFoodItemSuccess|IfetchFoodItemFailure