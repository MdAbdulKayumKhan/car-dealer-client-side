import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://safe-brook-81042.herokuapp.com/product',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert('Added product successfully')
            reset();
        })

    }
    return (
        <div>
           
            <div className="container">
                <br />
                <h2>
                    <div class="alert alert-light" role="alert">
                        Product Add Section
                    </div>
                </h2>
                <div className="addpro-sec col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="addpro">
                        <form className="bg-img" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("name", { required: true })} placeholder="Model Name" />
                            <input type="text" {...register("brand", { required: true })} placeholder="Brand Name" />
                            <input type="number" {...register("price", { required: true })} placeholder="Price" />
                            <input type="text" {...register("description", { required: true })} placeholder="Description" />
                            <input type="text" {...register("img", { required: true })} placeholder="img link" />
                            <input type="submit" value="Add Product" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;