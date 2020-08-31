import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <div className="card">
                <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <img height='200' width='200' src={props.product.img} alt=""/>
                            </div>
                            <div className=" pl-4 col-md-9">
                                <h5 className='text-primary'><Link to={'/product/'+props.product.key}>{props.product.name}</Link></h5>
                                <p className='text-secondary text-wrap'>By: {props.product.seller}</p>
                                <div className="row">
                                    <div className="col-md-6 pr-4">
                                        <p className='font-weight-bold'>${props.product.price}</p>
                                        <p>Only {props.product.stock} left in Stock. Order Soon!</p>
                                        {props.addCartBtn &&
                                        <button onClick={()=>props.mannageCard(props.product)} className='btn btn-warning btn-sm btn-block'><FontAwesomeIcon icon={faShoppingCart} /> Add To Card</button>
                                    }
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

export default Product;