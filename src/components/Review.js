import React from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../utilities/databaseManager';
import fakeData from '../fakeData';
import { useState } from 'react';
import ReviewProduct from './ReviewProduct';
import Cart from './Cart/Cart';

const Review = () => {
    const [cart, setCart] = useState([])
    useEffect(()=>{
        const savedData = getDatabaseCart()
        const keys = Object.keys(savedData)
        const cartProduct = keys.map(key=>{
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = savedData[key]
            return product
        })
        setCart(cartProduct)
    },[])  
    const removeProduct =(pdKey) =>{
       const newCart= cart.filter(pd => pd.key !==pdKey)
       removeFromDatabaseCart(pdKey)
       setCart(newCart)
    }
    return (  
        <div className='container'>
                <div className="row mt-2">
                    <div className="col-md-1"></div>
                    <div className="col-md-9">
                        {
                        cart.map(product=><ReviewProduct key ={product.key} product={product} removeProduct={removeProduct}></ReviewProduct>)
                        }
                    </div>
                    <div className="col-md-2 pt-4">
                        <Cart cart={cart}>
                                <Link className='btn btn-warning btn-block' to={'/review'}>Review Your Order</Link>
                        </Cart>
                    </div>
                </div>
        </div>
        )
}

export default Review;