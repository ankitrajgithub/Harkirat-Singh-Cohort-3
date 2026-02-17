import {ADD_TO_CART} from "../constants/cartConstants"

const initialState={
    cart:[]
}

export function cartReducer(state=initialState,action){
    if(action.type===ADD_TO_CART){
        return{
            ...state,
            cart:[...state.cart,action.payload]
        }
    }else{
        return state;
    }
}