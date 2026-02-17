import {createSlice} from '@reduxjs/toolkit';

const initialState={
    value:0,
    name:"Ankit Raj"
}

export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.value+=1;
        },
        decrement:(state,action)=>{
            state.value-=1;
        },
        changeByValue:(state,action)=>{
            state.value=action.payload;
        },
        setName:(state,action)=>{
            state.name=action.payload;
        }
    }
});

export const {increment, decrement,changeByValue,setName} = counterSlice.actions;

export const counterReducer=counterSlice.reducer;