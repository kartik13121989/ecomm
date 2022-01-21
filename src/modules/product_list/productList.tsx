import React,{useState,useEffect} from "react";
import {useAppSelector } from "../../app/hooks";
import {products} from "./productSlice";
import { BookCard } from "../../components";
import { Container, Col, Row } from "react-bootstrap";
import { ProductItem } from "../../interface/interface";
import { ProductService } from "../../service";
import { useAppDispatch } from "../../app/hooks";

const ProductList =():JSX.Element=>{
    const getProductList:ProductItem[] = useAppSelector(products);
    const [productListArr,setProductList] =useState<ProductItem[]>(getProductList);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        const service = new ProductService();
        service.getList(dispatch);
    },[]);
    useEffect(()=>{
        setProductList(getProductList);
    },[getProductList]);
    return(
        <>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {productListArr.map(el=>
                        <Col>
                            <BookCard props={el} ></BookCard>
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    )
}

export default ProductList;