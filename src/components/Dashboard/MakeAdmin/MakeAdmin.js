import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const MakeAdmin = () => {
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/users/admin/', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                reset();
                setSuccess(true);

            })
    }
    return (
        <div>
            <h1>this is make admin</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email", { required: true })} placeholder="email" />
                <input type="submit" />
            </form>
            {success && <p>admin added</p>}
        </div>
    );
};

export default MakeAdmin;