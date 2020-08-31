import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData';
import Product from './Product/Product';

const SingleProduct = () => {
    const {key} = useParams()
    const product = fakeData.find(pd=> pd.key=== key)
    return (
        <div className='jumbotron text-center'>
            <Product addCartBtn={false} product={product}></Product>
        </div>
    );
};

export default SingleProduct;