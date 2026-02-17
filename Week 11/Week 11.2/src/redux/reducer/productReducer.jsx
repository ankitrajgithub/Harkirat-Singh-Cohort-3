import {INCREASE_COUNTER} from '../constants/productConstants'
import {ADD_TO_PRODUCT} from '../constants/productConstants'

const initialState={
    products:[],
    counter:0
}

export const productReducer=(state=initialState,action)=>{
    if(action.type===ADD_TO_PRODUCT){
        return {
            ...state,
            products:[...state.products,action.payload]
        }
    }
    if(action.type===INCREASE_COUNTER){
        return {
            ...state,
            counter:state.counter+1
        }
    }else{
        return state;
    }
}