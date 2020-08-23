import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Cart(props) {

    const shippingCalculate= num=>{
        let Charge =0
        if(num>0 && num<25){ Charge= 12;}
        else if(num>=25 && num<=50){Charge=7;}
        else{ Charge= 0;}
        return Charge;
    }

    const cart = props.cart;
    const total = Number((cart.reduce((total,data)=> total + data.price,0)).toFixed(2))
    const shippingCharge = shippingCalculate(total);
    const beforeTax = total+shippingCharge;
    const estimateTax = Number((total/10).toFixed(2));
    const grandTotal = Number((beforeTax + estimateTax).toFixed(2));

    return (
        <div>
            <h5 className='text-center'>Order Details</h5>
            <p>Items Ordered: {cart.length}</p>
            <p className='m-0'> <small>Product Price : ${total}</small> </p>
            <p className='m-0'> <small> Shipping Charge : ${shippingCharge}</small></p>
            <p className='m-0'> <small> Total Before Tax : ${beforeTax}</small></p>
            <p className='m-0 pb-3'> <small> Estimate Tax : ${estimateTax}</small></p>
            <h6>Total Amount: ${grandTotal}</h6>
            <button className='btn btn-warning btn-block'>Review Your Order</button>



        </div>
    );
}

export default Cart;