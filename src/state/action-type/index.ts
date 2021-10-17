import { type } from "os";
import { Dispatch } from "react";

export enum ActionType{
    FETCH_AUTH_REQUEST = 'FETCH_AUTH_REQUEST',
    FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS',
    FETCH_AUTH_FAILURE = 'FETCH_AUTH_FAILURE'
}

interface IfetchAuthRequest{
    type:ActionType.FETCH_AUTH_REQUEST,
    payload:string
}
interface IfetchAuthSuccess{
    type:ActionType.FETCH_AUTH_SUCCESS,
    payload:any[]
}
interface IfetchAuthFailure{
    type:ActionType.FETCH_AUTH_FAILURE,
    payload:string
}
export type Action =IfetchAuthRequest|IfetchAuthSuccess|IfetchAuthFailure