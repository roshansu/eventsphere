import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name:'navSlice',
    initialState:{
        isActive:'home'
    },
    reducers:{
        setisActive:(state, action)=>{
            state.isActive = action.payload
        }
    },
});

export {setisActive}
export default navSlice.reducers;