/*
  NOte: DEmo including action ,reducers, store
  =>multiple reduces (Ex authreducer,profile ,company details reduces etc)
  =>middleware 
  =>logger with redux
  https://www.youtube.com/watch?v=8zPyXAWS0L4&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=11

  List of CMDs used :
    node --version
    node index:
    npm init --yes 
    npm install redux 
    npm install redux-logger
    https://www.npmjs.com/package/redux-logger
    npm install axios redux-thunk
*/

const  redux=require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()
/*
                        (subcribed)JAVA SCRIPT (step1 )

        Redux Store                                     ACTION (step2)
         (State)

                        REDUCER (step3)

  Store: Hold the state of application 
  Action :describes the changes in the state of application 
  reducer:Which actually carries out the state transition depending on the action

   3 Principles :
    1) "The state of your whole application is stored in an object tree with in a single store "
    2)"The only way to change the state is to emit an action ,an obect describing what happend "
        -To update the state of your app,You need to let redux know about that with an action 
        -Not allowed to directly update the state obect 
    3)"To specify how the state tree is transfomed by action,you write pure reduces"
      -(previousState ,action )=>new state 
 */


/*Write Action -step :2
    =>The only way application can interact with the store 
    =>carry some information from your app to the reducer store 
    =>plain java script obects
    =>Have a 'type' property that indicates the type of action being performed 
    =>The 'type' property is typically defined as string constats

*/
/*
   Q :What is middleware and why use
    =>Is the suggested way to extend redux with custom functionality
      =>Provide a 3rd party extension point between dispatching an action ,and the moment it reaches the reducer
      =>Use middleware for logging ,crash reporing ,performing asyncronous tasks etc 

*/
const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake()
{
 return {
    type:BUY_CAKE,
    info:"First redux action"
 }
}

function buyIceCream () {
    return {
      type: BUY_ICECREAM
    }
  }
  
/*
   write reducer -step :3 
   -specify how the app`s state changes in response to actions  sent to the store   
     function that accepts state and action as arguments ,and returns the next state 
     of application 
     (previousState ,action )=>new state 
*/
const initialCakeState = {
    numOfCakes: 10
  }
  
  const initialIceCreamState = {
    numOfIceCreams: 20
  }
    // arg to to reducers 

/*const reducer =(state=initialState,action)=>{
    switch(action.type){
         case BUY_CAKE:
            return{
                ...state,  //Copy of obj by using sperd operator
                numOfCakes:state.numOfCakes-1 //Update only specific record of obecjt ,other properties remain unchange
            }
            default: return state
    } 
}*/
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
      case BUY_CAKE: return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
      default: return state
    }
  }
  
  const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
      case BUY_ICECREAM: return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      }
      default: return state
    }
  }
  

/*Implemetation of store -step :4
 1-one store for the entire application 
  Responsibilitys:-
    1)Holds application state
    2)Allow access to state via getState()
    3)Allow state to be updated  via dispatch(action)
    4)Registers listeners vis subcribe (listener)
    5)Handles unregistering of listeners via the function returned by subcriber ()listener
 */
//const store=createStore(reducer)
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
  })
  const store = createStore(rootReducer, applyMiddleware(logger))
console.log( "Initial state :"+ JSON.stringify(store.getState()))
//console.log("Update state:"+JSON.stringify(store.getState())
const unsubscribe=store.subscribe(()=>{})
store.dispatch(buyCake()) //Update store
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe();

/*
  out  put 
  prev state { cake: { numOfCakes: 10 }, iceCream: { numOfIceCreams: 20 } }
   action     { type: 'BUY_CAKE', info: 'First redux action' }
   next state { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 20 } }
 action BUY_CAKE @ 18:55:13.196
   prev state { cake: { numOfCakes: 9 }, iceCream: { numOfIceCreams: 20 } }
   action     { type: 'BUY_CAKE', info: 'First redux action' }
   next state { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 20 } }
 action BUY_CAKE @ 18:55:13.200
   prev state { cake: { numOfCakes: 8 }, iceCream: { numOfIceCreams: 20 } }
   action     { type: 'BUY_CAKE', info: 'First redux action' }
   next state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 20 } }
 action BUY_ICECREAM @ 18:55:13.202
   prev state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 20 } }
   action     { type: 'BUY_ICECREAM' }
   next state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 19 } }
 action BUY_ICECREAM @ 18:55:13.204
   prev state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 19 } }
   action     { type: 'BUY_ICECREAM' }
   next state { cake: { numOfCakes: 7 }, iceCream: { numOfIceCreams: 18 } }

*/