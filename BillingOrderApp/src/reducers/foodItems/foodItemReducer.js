 
export const FETCH_FOODITEMS_REQUEST = 'FETCH_FOODITEMS_REQUEST'
export const FETCH_FOODITEMS_SUCCESS = 'FETCH_FOODITEMS_SUCCESS'
export const FETCH_FOODITEMS_FAILURE = 'FETCH_FOODITEMS_FAILURE'
  const initialState = {
    loading: false,
    foodItems: [],
    error: ''
  }

export const foodItemsReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_FOODITEMS_REQUEST:
          return {
            ...state,
            loading: true
          }
        case FETCH_FOODITEMS_SUCCESS:
          return {
            loading: false,
            foodItems: action.payload,
            error: ''
          }
        case FETCH_FOODITEMS_FAILURE:
          return {
            loading: false,
            foodItems: [],
            error: action.payload
          }
        default: return state
      }
    
}
