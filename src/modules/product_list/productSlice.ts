import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ProductItem, ProductListInitialState } from '../../interface/interface';

const initialState:ProductListInitialState={
    loading:false,
    products:[],
    getProductFailure:false,
    error:{}
} 
export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        "GET_PRODUCT_START": (state)=>{
            return {
                ...state,
                loading: true
            };
        },
        "GET_PRODUCT_SUCCESS": (state,action:PayloadAction<ProductItem[]>)=>{
            return {
                ...state,
                loading: false,
                products:action.payload
            };
        },
        "GET_PRODUCT_FAILURE": (state,action:PayloadAction<any>)=>{
            return {
                ...state,
                loading: false,
                getProductFailure:true,
                error:action.payload
            };
        }
    }

});

export const {GET_PRODUCT_START, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE } = productSlice.actions;
export const products =(state:RootState) => state.product.products;
export default productSlice.reducer;
