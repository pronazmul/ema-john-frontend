import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product/Product';

const SingleProduct = () => {
    const {key} = useParams()
    const[singleData, setSingleData] = useState([])
        
    useEffect(()=>{
            fetch(`http://localhost:5000/product/${key}`)
            .then(res => res.json())
            .then(data=> setSingleData(data))
        },[])

    return (
        <div className='jumbotron text-center'>
            {singleData.length>0 && <Product addCartBtn={false} product={singleData[0]}></Product>}            
        </div>
    );
};

export default SingleProduct;