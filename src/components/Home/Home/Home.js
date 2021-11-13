import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Banner from '../../Shared/Banner/Banner';
import Navigation from '../../Shared/Navigation/Navigation';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://safe-brook-81042.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])

    const listedProducts = products.slice(0, 6);
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <h1><div class="alert alert-light" role="alert">
                Explore Our Collection
            </div></h1>
            <div class="card-deck container">
                <div className="row">
                    {
                        listedProducts.map(listedProduct => (
                            <div key={listedProduct._id} class="card col-12 col-md-4 col-lg-4 p-3 gap-2">
                                <img src={listedProduct.img} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{listedProduct.name}</h5>
                                    <p class="card-text">{listedProduct.description}</p>
                                    <p class="card-text">{listedProduct.brand}</p>
                                    <p class="card-text">{listedProduct.price}</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">
                                        <Link to={`/order/${listedProduct._id}`}>
                                        <button type="button" class="btn btn-primary btn-sm">Purchase Now</button>
                                        </Link>
                                    </small>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;