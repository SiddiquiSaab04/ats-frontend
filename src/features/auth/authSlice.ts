import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface User{
    id:number;
    name:string;
    email:string;
    role:string;
}
export interface AuthState {
    user: User | null;
    token:string | null;
    isLoggedIn:boolean;
}

const initialState: AuthState = {
    user: null,
    token:null,
    isLoggedIn:false
}

const authSlice = createSlice({
    name:"auth",
    reducers:{
        login:(state,action:PayloadAction<{user:User,token:string}>)=>{
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        logout:(state)=>{
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
        }
    },
    initialState
})

export const {
    login,
    logout
} = authSlice.actions;

export const authReducer = authSlice.reducer;
