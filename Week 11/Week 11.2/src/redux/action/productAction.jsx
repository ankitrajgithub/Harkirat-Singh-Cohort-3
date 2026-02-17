import {ADD_TO_PRODUCT} from '../constants/productConstants'

export const addToProduct=(details)=>{
    return {
        type:ADD_TO_PRODUCT,
        payload:details
    }
}