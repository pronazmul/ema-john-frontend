import React from 'react';

const ReviewProduct = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <img height='200' width='200' src={props.product.img} alt=""/>
                        </div>
                        <div className=" pl-4 col-md-9">
                            <h5 className='text-primary'>{props.product.name}</h5>
                            <p className='text-secondary text-wrap'>By: {props.product.seller}</p>
                            <p className='text-secondary text-wrap'>Quantity: {props.product.quantity}</p>
                            <div className="row">
                                <div className="col-md-6 pr-4">
                                    <p className='font-weight-bold'>${props.product.price}</p>
                                    <p>Only {props.product.stock} left in Stock. Order Soon!</p>
                                    <button onClick={()=>props.removeProduct(props.product.key)} className='btn btn-danger btn-sm btn-block'>Remove</button>
                            </div>
                                <div className="col-md-6">
                                    <h5>Features:</h5>
                                            <ul>
                                                {
                                                    props.product.features.map((features, i)=><li key={i} className='small'>{features.description}, {features.value}</li>)
                                                }
                                            </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ReviewProduct;