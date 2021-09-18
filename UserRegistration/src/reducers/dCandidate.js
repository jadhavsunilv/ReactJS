import { ACTION_TYPE } from "../actions/dCandidate";   

const initialState={
    list:[],
}

export const dCandidate=(state=initialState,action)=>{
    switch(action.type)
    {
        case ACTION_TYPE.FETCH_ALL:
            return{
                ...state,   // If we have  any other  data in store  or keep remainig data as its
                list:[...action.payload]
            }
        case ACTION_TYPE.CREATE:
            return{
                ...state,   // If we have  any other  data in store 
                list:[...state.list,action.payload]
            }
        case ACTION_TYPE.UPDATE:
            return{
                ...state,   // If we have  any other  data in store 
                list :state.list.map(x=>x.id==action.payload.id ? action.payload:x)  //update list data 
            }
        case ACTION_TYPE.DELETE:
            return{
                        ...state,   // If we have  any other  data in store 
                        list :state.list.filter(x=>x.id !=action.payload)  //delete list data 
             }

        default: return {state};
    }
}

