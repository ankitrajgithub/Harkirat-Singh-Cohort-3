import {ADD_TO_CART} from "../constants/cartConstants"

export function cartAction(details){
    return{
        type:ADD_TO_CART,
        payload:details
    }
}