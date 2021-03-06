import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { _id, name, img, brand, price, description } = props.product;
    return (
        <div class="card col-12 col-md-4 col-lg-3 p-3">
            <img src={img} class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{description}</p>
                <p class="card-text">{brand}</p>
                <p class="card-text">{price}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">
                    <Link to={`/order/${_id}`}>
                        <button type="button" class="btn btn-primary btn-sm">Purchase Now</button>
                    </Link>
                </small>
            </div>
        </div>
    );
};

export default Product;