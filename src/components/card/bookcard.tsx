import React from "react";
import {Card,Button} from "react-bootstrap";
import { ProductItem } from "../../interface/interface";
import {Link} from "react-router-dom";


const BookCard:React.FC<ProductItem|any>=({props}):JSX.Element=>{
    const BASE_URL:string = (process.env.REACT_APP_BASE_URL as string);
    return(
    <Card id={props.id}>
        <Card.Img variant="top" src={`${BASE_URL}/${props.imageLink}`} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
            <Link to={`/product/${props.id}/details`}>Buy Now</Link>
        </Card.Body>
    </Card>
    )
}

export default BookCard;