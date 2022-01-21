import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { cartStatus } from "../productDescription/cartSlice";
import { ProductItem } from "../../interface/interface";
import {Card, Row,Container} from "react-bootstrap";


const ReviewOrder:React.FC=():JSX.Element=>{
    const orders:ProductItem[] = useAppSelector(cartStatus);
    const [checkoutOrder,setCheckoutOrder] = useState<ProductItem[]>([]);
    useEffect(()=>{
        setCheckoutOrder(orders);
    },[cartStatus]);
    const BASE_URL:string = (process.env.REACT_APP_BASE_URL as string);
    return(
        <Container>  
            <Row xs={1} md={3} className="g-4">
                {checkoutOrder.map((el)=>
                    <Card>
                        <Card.Img variant="top" src={`${BASE_URL}/${el.imageLink}`} className="img-fluid"/>
                        <Card.Body>
                        <Card.Title>{el.title}</Card.Title>
                        <Card.Text>
                            {el.description}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Price: {el.price}</small>
                        </Card.Footer>
                    </Card>  
                )}
            </Row>
        </Container>
    )
}

export default ReviewOrder;