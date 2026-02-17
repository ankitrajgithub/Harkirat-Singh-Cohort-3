import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState={
    users:[],
    loading:false,
    error:null
}

const fetchUser=createAsyncThunk(
    "user/fetchUser",
    async (payload, {rejectWithValue})=>{
        try{
            const response=await fetch("https://jsonplaceholder.typicode.com/users");
            const data=await response.json();
            return data;   
        }catch(error){
            return rejectWithValue("Error Caught!! Please fix it!!")
        }
    }
)

export const userSlice=createSlice({
    name:"users",
    initialState,
    reducers:{

    },
    extraReducers:(addBuilder)=>{
        addBuilder.addCase(fetchUser.pending,(state,action)=>{
            state.loading=true;
            state.error=null;
        });
        addBuilder.addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        });
        addBuilder.addCase(fetchUser.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });
    }
});

export {fetchUser}
export const userReducer=userSlice.reducer;