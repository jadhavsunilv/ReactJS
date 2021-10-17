import { type } from "os";
import { Dispatch } from "react";

export enum ActionType{
    FETCH_ORDERMASTER_REQUEST = 'FETCH_ORDERMASTER_REQUEST',
    FETCH_ORDERMASTER_SUCCESS = 'FETCH_ORDERMASTER_SUCCESS',
    FETCH_ORDERMASTER_FAILURE = 'FETCH_ORDERMASTER_FAILURE'
}

interface IfetchOrderMasterRequest{
    type:ActionType.FETCH_ORDERMASTER_REQUEST,
    payload:string
}
interface IfetchOrderMasterSuccess{
    type:ActionType.FETCH_ORDERMASTER_SUCCESS,
    payload:{}
}
interface IfetchOrderMasterFailure{
    type:ActionType.FETCH_ORDERMASTER_FAILURE,
    payload:string
}
export type Action =IfetchOrderMasterRequest|IfetchOrderMasterSuccess|IfetchOrderMasterFailure