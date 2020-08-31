import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
const Shops = () => {
    
    const first10 = fakeData.slice(0,10)
    const [product, setProduct] = useState(first10)
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const savedData = getDatabaseCart()
        const keys = Object.keys(savedData)
        const existProducts=  keys.map(key=>{
                        const product = fakeData.find(pd => pd.key === key)
                        product.quantity = savedData[key]
            return product
        })
        setCart(existProducts)
    },[])

                const mannageCard= (selectedProduct)=>{
                        const addedKey = selectedProduct.key;
                        const similarProduct = cart.find(product=> product.key ===addedKey)
                        let newCart
                        let count = 1
                        if(similarProduct){
                            count = similarProduct.quantity +1
                            similarProduct.quantity = count
                            const others = cart.filter(pd => pd.key !== addedKey)
                            newCart = [...others, similarProduct];
                        }else{
                            selectedProduct.quantity = 1
                            newCart = [...cart, selectedProduct]
                        }
                        setCart(newCart)
                        addToDatabaseCart(selectedProduct.key, count)
                        }


    return (
        <div className='container'>
                <div className="row mt-2">
                    <div className="col-md-1"></div>
                    <div className="col-md-9">
                        {
                            product.map(product=><Product key = {product.key} addCartBtn={true} product={product} mannageCard={mannageCard}></Product> )
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
};

export default Shops;