import {useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment, decrement,changeByValue} from '../redux-toolkit/features/counter/counterSlice';


export function Counter(){
    const [value,setValue]=useState();

    const dispatch=useDispatch();

    const counter=useSelector((state)=>{
        return state.counterReducer.value;
    });

    function handleInputChange(){
        dispatch(changeByValue(parseInt(value)));
    }

    return (
        <>
            <div>Counter {counter}</div>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <input type='number' placeholder="Enter a number" onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={handleInputChange}>Change</button>
        </>
    )
}
