import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shops = () => {
    
    const first10 = fakeData.slice(0,10)
    const [product, setProduct] = useState(first10)
    const [cart, setCart] = useState([]);

    const mannageCard= (selectedProduct)=>{
            const newCart = [...cart, selectedProduct]
            setCart(newCart)
                            }


    return (
        <div className='container'>
                <div className="row mt-2">
                    <div className="col-md-1"></div>
                    <div className="col-md-9">
                        {
                            product.map(product=><Product product={product} mannageCard={mannageCard}></Product> )
                        }
                    </div>
                    <div className="col-md-2 pt-4">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
        </div>
    )
};

export default Shops;