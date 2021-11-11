import React from 'react';
import { useForm } from "react-hook-form";
import Navigation from '../../Shared/Navigation/Navigation';
import './Login.css';
import logInImg from '../../../img/loginImg.png';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Navigation></Navigation>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-7 col-lg-7">
                        <h1>Login</h1>
                        <div className="login">
                            <form className="bg-img" onSubmit={handleSubmit(onSubmit)}>
                                <input type="email" {...register("email", { required: true })} placeholder="Your Email" />
                                <input type="password" {...register("password", { required: true })} placeholder="Your Password" />
                                <input type="submit" value="Login" />
                            </form>
                        </div>

                    </div>
                    <div className="car-img col-12 col-sm-12 col-md-5 col-lg-5">
                        <img className="img-fluid" src={logInImg} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;