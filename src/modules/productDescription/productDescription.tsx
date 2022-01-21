import React,{useEffect, useState} from "react";
import { Container,Col,Row,Button,Image } from "react-bootstrap";
import { ProductParams,ProductItem, CallBack } from "../../interface/interface";
import {useAppSelector,useAppDispatch } from "../../app/hooks";
import {products} from "../product_list/productSlice";
import { CartService } from "../../service";
import { useHistory } from "react-router-dom";


const ProductDescription:React.FC<ProductParams> =({productId}):JSX.Element=>{
    const getProductList:ProductItem[] = useAppSelector<ProductItem[]>(products);
    const [productI,setProductI] =useState<ProductItem>({
        "id":0,
        "title":"",
        "description":"",
        "author":"",
        "imageLink":"",
        "language":"",
        "country":"",
        "price":0
    });
    const history = useHistory();
    const BASE_URL:string = (process.env.REACT_APP_BASE_URL as string);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        const product = getProductList.filter(el=>el.id === parseInt(productId,10));
        setProductI(product[0]);
    },[getProductList,productId]);
    const addToCart =(event:React.MouseEvent<HTMLElement>,callback:CallBack=()=>{})=>{
        event.preventDefault();
        const service = new CartService();
        service.addProduct(dispatch,productI,callback);
    }
    const buyNow=(event:React.MouseEvent<HTMLElement>)=>{
        addToCart(event,()=>{
            history.push('/checkout')
        });

    }
    return(
        <>
           <Container>
               <Row>
                    <Col sm={10} md={10}>
                        <Row>
                            <h2>{productI?.title}</h2>
                        </Row>
                        <Row>
                            <Image src={`${BASE_URL}/${productI?.imageLink}`} thumbnail />
                        </Row>
                        <Row>
                            <Col>
                                <Button className="primary" onClick={addToCart}>Add to Cart</Button>
                            </Col>
                            <Col>
                                <Button className="primary" onClick={buyNow}>Buy Now</Button>
                            </Col>
                        </Row>
                        <Row>
                            <h3>Description</h3>
                            <section>
                                <h5>{productI?.description}</h5>
                            </section>
                        </Row>
                        
                    </Col>
               </Row>
           </Container>
        </>
    )
}

export default ProductDescription;