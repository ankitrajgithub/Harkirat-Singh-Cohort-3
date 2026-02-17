import {INCREASE_COUNTER} from '../constants/productConstants'

export function counterAction(){
    return {
        type:INCREASE_COUNTER,
        payload:"Counter Increased!!"
    }
}