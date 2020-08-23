import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div>
            {/* Header Images */}
            <img className='d-block mx-auto pt-2' height='80' width='290' src={logo} alt=""/>
            {/* Navigation Bar */}
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/review">Order Review</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/mannage">Mannage Inventory Here</a>
                            </li>
                            </ul>
                        </div>
                </nav>
        </div>
    );
};

export default Header;