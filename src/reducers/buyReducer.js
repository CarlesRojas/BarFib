import {ACTIONS} from '../constants'
const INITIAL_STATE = {
    isDateTimePickerVisible: false,
    pickUpTime: 'NOW',
    product: null
};
export const buyReducer = (state=INITIAL_STATE,action) =>{
   switch (action.type) {
       case ACTIONS.FetchProduct:
           return state
       case ACTIONS.ReceiveProduct:
           return {
               ...state,
               product: action.payload
           }

       default:
           return state

   }
}