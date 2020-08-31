import React from 'react';
import images from '../images/404.png'

const NotFound = () => {
    return (
        <div className='container-fluid bg-secondary'>
            <div className="container">
                <div className="text-center display-2 text-light">404 Page Not Found</div>
                <div className="col-md-8 mx-auto pt-4">
                <img className='d-block mx-auto shadow img-thumbnail ' height='500' width='700' src={images} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default NotFound;