import{createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import {reducers  } from "../reducers";   //point to index.js by defoult 
export const store =createStore(
    reducers,                                 // ()=>[],
    compose(applyMiddleware(thunk))
    )

