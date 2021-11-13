import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

import './Reviews.css';

const Reviews = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert(' Review Added successfully')
                reset();
            })

    }
    return (
        <div>
            <div className="container">
                <br />
                <h2>
                    <div class="alert alert-light" role="alert">
                        Add A Review
                    </div>
                </h2>
                <div className="addpro-sec col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="addpro">
                        <form className="bg-img" onSubmit={handleSubmit(onSubmit)}>
                            <input value={user?.displayName} {...register("name", { required: true })} />
                            <input value={user?.email} {...register("email", { required: true })} />
                            <textarea type="text" {...register("review", { required: true })} placeholder="Your review " />
                            <select {...register("rating")} className="p-2 m-2 w-100">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <input type="submit" value="Add Review" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;