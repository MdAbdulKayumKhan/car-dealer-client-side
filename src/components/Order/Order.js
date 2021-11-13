import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import './Order.css';

const Order = () => {
    const [order, setOrder] = useState({});
    const { orderId } = useParams();
    const {user} = useAuth();
    // console.log(orderId)
    useEffect(()=>{
        fetch(`https://safe-brook-81042.herokuapp.com/order/${orderId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setOrder(data);
        })
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://safe-brook-81042.herokuapp.com/order', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.insertedId){
                alert('Order submitted successfully')
                reset();
            }
        })
    }

    const pending ='pending';
    
    return (
        <div>
            <Navigation></Navigation>
            <h1>this is Order</h1>
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <div class="card mx-auto my-5" style={{ width: '25rem' }}>
                        <img src={order.img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Model-Name: {order.name}</h5>
                            <p class="card-text">Brand: {order.brand}</p>
                            <p class="card-text">Price: {order.price}</p>
                            <p class="card-text">Details: {order.description}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <div class="order my-5">
                        <form className="bg-img" onSubmit={handleSubmit(onSubmit)}>
                            <input value={user?.displayName} {...register("name", { required: true })} />
                            <input value={user?.email} {...register("email", { required: true })} />
                            <input value={order?.name} {...register("serviceName", { required: true })} />
                            <input type="hidden" value={pending} {...register("status", { required: true })} />
                            <textarea type="text" {...register("address", { required: true })} placeholder="Your Address" />
                            <input type="number" {...register("phone", { required: true })} placeholder="Your Phone Number" />
                            
                            <input type="submit" value="Order" />
                        </form>
                    </div>

                </div>
                </div>
            </div>

        </div>
    );
};

export default Order;