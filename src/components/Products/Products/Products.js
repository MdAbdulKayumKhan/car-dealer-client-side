import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://safe-brook-81042.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <h1><div class="alert alert-light" role="alert">
                Explore Our Collection
            </div></h1>
            <div class="card-deck container">
                <div className="row">
                    {
                        products.map(product => <Product
                        key={product._id}
                        product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;