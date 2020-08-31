import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            {/* Header Images */}
            <img className='d-block mx-auto pt-2' height='80' width='290' src={logo} alt=""/>
            {/* Navigation Bar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to={'/'}>Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/review'}>Order Review</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/inventory'}>Mannage Inventory</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
        </div>
    );
};

export default Header;