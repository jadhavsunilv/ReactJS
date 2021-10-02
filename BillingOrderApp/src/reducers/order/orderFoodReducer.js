 
export const FETCH_ORDERFOODITEMS_REQUEST = 'FETCH_ORDERFOODITEMS_REQUEST'
export const FETCH_ORDERFOODITEMS_SUCCESS = 'FETCH_ORDERFOODITEMS_SUCCESS'
export const FETCH_ORDERFOODITEMS_FAILURE = 'FETCH_ORDERFOODITEMS_FAILURE'
  const initialState = {
    loading: false,
    orderFoodItems: [],
    error: ''
  }

export const orderFoodReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_ORDERFOODITEMS_REQUEST:
          return {
            ...state,
            loading: true
          }
        case FETCH_ORDERFOODITEMS_SUCCESS:
          return {
            loading: false,
            orderFoodItems: action.payload,
            error: ''
          }
        case FETCH_ORDERFOODITEMS_FAILURE:
          return {
            loading: false,
            orderFoodItems: [],
            error: action.payload
          }
        default: return state
      }
    
}
