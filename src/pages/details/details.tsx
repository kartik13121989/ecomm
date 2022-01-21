import React from "react";
import { useParams } from "react-router-dom";
import { ProductDescription } from "../../modules";
import { ProductParams } from "../../interface/interface";


const Details:React.FC =():JSX.Element=>{
    const {productId} = useParams<ProductParams>();
    return(
        <>
          <ProductDescription productId={productId} />
        </>
    )
}

export default Details;