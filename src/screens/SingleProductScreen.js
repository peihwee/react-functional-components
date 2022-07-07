import React from 'react';

import {
    useParams
} from "react-router-dom";

function SingleProductScreen()
{
    const { productId } = useParams();

    return (
        <div className='Main'>
            <h1>Product {productId}</h1>
        </div>
    );
}

export default SingleProductScreen;