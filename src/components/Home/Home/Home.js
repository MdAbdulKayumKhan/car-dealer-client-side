import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [ratings, setRating] = useState([]);
    const { isLoading } = useAuth();
    useEffect(() => {
        fetch('https://safe-brook-81042.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProducts(data)
            })
    }, [])

    const listedProducts = products.slice(0, 6);

    useEffect(() => {
        fetch('https://safe-brook-81042.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRating(data)
            })
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <h1><div className="alert alert-light" role="alert">
                Explore Our Collection
            </div></h1>
            <div className="card-deck container">
                {!isLoading &&
                    <div className="row">
                        {
                            listedProducts.map(listedProduct => (
                                <div key={listedProduct._id} className="card col-12 col-md-4 col-lg-4 p-3 gap-2">
                                    <img src={listedProduct.img} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{listedProduct.name}</h5>
                                        <p className="card-text">{listedProduct.description}</p>
                                        <p className="card-text">{listedProduct.brand}</p>
                                        <p className="card-text">{listedProduct.price}</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">
                                            <Link to={`/order/${listedProduct._id}`}>
                                                <button type="button" className="btn btn-primary btn-sm">Purchase Now</button>
                                            </Link>
                                        </small>
                                    </div>
                                </div>
                            ))
                        }
                    </div>}
                {isLoading &&
                    <div className="spinner-grow text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                }
            </div>

            <div className="my-5">
                <div className="comment-section">
                    <div className="container">
                        <div className="review">
                            <h2 className="R-title">Reviews</h2>
                            <div className="comment-section">

                                {
                                    ratings.map(rt => (
                                        <div key={rt._id} className="media media-review">
                                            {/* <div className="media-user"><img src="https://i.imgur.com/nUNhspp.jpg" alt="" /></div> */}
                                            <div className="media-body">
                                                <div className="M-flex">
                                                    <h2 className="title"><span>{rt.name}</span></h2>
                                                    <div className="rating-row">
                                                        
                                                        {rt.rating === '1' &&
                                                            <ul>
                                                                <li className=""><i className="fa fa-star"></i></li>
                                                                <li className=""><i className="fa fa-star-o"></i></li>
                                                                <li className=""><i className="fa fa-star-o"></i></li>
                                                                <li className=""><i className="fa fa-star-o"></i></li>
                                                                <li className=""><i className="fa fa-star-o"></i></li>
                                                            </ul>
                                                        }
                                                        {rt.rating === '2' &&
                                                            <ul>
                                                                <li className=""><i className="fa fa-star"></i></li>
                                                                <li className=""><i className="fa fa-star"></i></li>
                                                                <li className=""><i className="fa fa-star-o"></i></li>
                                                                <li className=""><i className="fa fa-star-o"></i></li>
                                                                <li className=""><i className="fa fa-star-o"></i></li>
                                                            </ul>
                                                        }
                                                        {rt.rating === '3' &&
                                                            <ul>
                                                                <li className=""><i className="fa fa-star"></i></li>
                                                                <li className=""><i className="fa fa-star"></i></li>
                                                                <li className=""><i className="fa fa-star"></i></li>
                                                                <li className=""><i className="fa fa-star-o"></i></li>
                                                                <li className=""><i className="fa fa-star-o"></i></li>
                                                            </ul>
                                                        }
                                                        {rt.rating === '4' &&
                                                            <ul>
                                                                <li className=""><i className="fa fa-star"></i></li>
                                                                <li className=""><i className="fa fa-star"></i></li>
                                                                <li className=""><i className="fa fa-star"></i></li>
                                                                <li className=""><i className="fa fa-star"></i></li>
                                                                <li className=""><i className="fa fa-star-o"></i></li>
                                                            </ul>
                                                        }
                                                        {rt.rating === '5' &&
                                                            <ul>
                                                                <li className=""><i className="fa fa-star"></i></li>
                                                                <li className=""><i className="fa fa-star"></i></li>
                                                                <li className=""><i className="fa fa-star"></i></li>
                                                                <li className=""><i className="fa fa-star"></i></li>
                                                                <li className=""><i className="fa fa-star"></i></li>
                                                            </ul>
                                                        }

                                                    </div>
                                                </div>
                                                <div className="description">{rt.review}</div>
                                            </div>
                                        </div>
                                    ))
                                }



                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;