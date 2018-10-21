import {ACTIONS} from '../constants'
const INITIAL_STATE = {
    products:[]
};
export const homeReducer = (state=INITIAL_STATE,action) =>{
   switch (action.type) {
       case ACTIONS.FetchProducts:
           return state
       case ACTIONS.ReceiveProducts:
           return {
               ...state,
               products: action.payload
       }
       case ACTIONS.RequestProducts:
           return {
               ...state,
               products: []
           }

       default:
           return state

   }
}