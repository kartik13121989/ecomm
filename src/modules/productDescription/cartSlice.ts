import { createSlice ,PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { CartInitialState, ProductItem } from '../../interface/interface';

export const initialState:CartInitialState={
    "loading":false,
    "addToCartSuccess":[],
    "addToCartFailure":false,
    "error":{}
} 

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        "ADD_PRODUCT_START":(state)=>{
            return {
                ...state,
                loading:true
            }
        },
        "ADD_PRODUCT_SUCCESS":(state,action:PayloadAction<ProductItem>)=>{
            console.log(action.payload);
            return {
                ...state,
                loading:false,
                addToCartSuccess:[
                    ...state.addToCartSuccess,
                    action.payload
                ]
            }
        },
        "ADD_PRODUCT_FAILURE":(state,action:PayloadAction<any>)=>{
            return {
                ...state,
                loading:false,
                addToCartSuccess:[],
                addToCartFailure:true,
                error:action.payload

            }
        }
    }
});

export const {ADD_PRODUCT_START,ADD_PRODUCT_SUCCESS,ADD_PRODUCT_FAILURE} = cartSlice.actions;
export const cartStatus = (state:RootState) => state.cart.addToCartSuccess;
export default cartSlice.reducer;