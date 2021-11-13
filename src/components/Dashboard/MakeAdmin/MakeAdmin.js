import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const MakeAdmin = () => {
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://safe-brook-81042.herokuapp.com/users/admin/', {
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
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input style={{width: '40%'}} {...register("email", { required: true })} placeholder="email" />
                <input type="submit" />
            </form>
            {success && <p>admin added</p>}
        </div>
    );
};

export default MakeAdmin;