import { BUY_ICECREAM } from "./icecreamTypes";
const initialState ={
    numofIcecream :30
}
export const icecreamReducer=(state = initialState,action)=>{
   switch(action.type){
    case BUY_ICECREAM :
        return {...state,numofIcecream : state.numofIcecream -1};
    default:
            return state
   }
}