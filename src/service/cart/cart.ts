import {AppDispatch} from "../../app/store";
import { toast } from "react-toastify";
import { ProductItem ,CallBack} from "../../interface/interface";
import { ADD_PRODUCT_START,ADD_PRODUCT_SUCCESS,ADD_PRODUCT_FAILURE } from "../../modules/productDescription/cartSlice";

class CartService{
    async addProduct(dispatch:AppDispatch,product:ProductItem,callback:CallBack){
        try{
            await dispatch(ADD_PRODUCT_START());
            await dispatch(ADD_PRODUCT_SUCCESS(product));
            toast.success("Product added in the cart");
            callback();
        }catch(err){
            toast.error("Product not added")
            dispatch(ADD_PRODUCT_FAILURE(err.toString()));
        }
    }
}

export default CartService;