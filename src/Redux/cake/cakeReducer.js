import { BUY_CAKE } from "./cakeTypes"

const initialState ={
    numofcake:10
}
export const cakeReducer =(state= initialState,action)=>{
   switch(action.type){
    case BUY_CAKE: 
    return {...state,numofcake: state.numofcake -1 };
    default:
        return state;
   }
}