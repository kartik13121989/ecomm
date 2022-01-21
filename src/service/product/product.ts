import {AppDispatch} from "../../app/store";
import { URL } from "../../config/url";
import axios from 'axios';
import { toast } from 'react-toastify';
import { GET_PRODUCT_FAILURE,GET_PRODUCT_START,GET_PRODUCT_SUCCESS } from "../../modules/product_list/productSlice";

class ProductService{
    async getList(dispatch:AppDispatch):Promise<any>{
        try{
            dispatch(GET_PRODUCT_START());
            const BASE_URL:string = (process.env.REACT_APP_BASE_URL as string);
            const {url} = URL.ProductService;
            const data = await axios.get(`${BASE_URL}${url}`);
            dispatch(GET_PRODUCT_SUCCESS(data.data));
        }catch(err:any){
            toast.error("Files not found")
            dispatch(GET_PRODUCT_FAILURE(err.toString()));
        }
    } 
}

export default ProductService;

