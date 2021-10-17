import { type } from "os";
import { Dispatch } from "react";
 import{iCustomer } from '../../Models/customer/customer'
export enum ActionType{
    FETCH_CUSTOMER_REQUEST = 'FETCH_CUSTOMER_REQUEST',
    FETCH_CUSTOMER_SUCCESS = 'FETCH_CUSTOMER_SUCCESS',
    FETCH_CUSTOMER_FAILURE = 'FETCH_CUSTOMER_FAILURE'
}

interface IfetchCustomerRequest{
    type:ActionType.FETCH_CUSTOMER_REQUEST,
    payload:string
}
interface IfetchCustomerSuccess{
    type:ActionType.FETCH_CUSTOMER_SUCCESS,
    payload:iCustomer[]
}
interface IfetchCustomerFailure{
    type:ActionType.FETCH_CUSTOMER_FAILURE,
    payload:string
}
export type Action =IfetchCustomerRequest|IfetchCustomerSuccess|IfetchCustomerFailure