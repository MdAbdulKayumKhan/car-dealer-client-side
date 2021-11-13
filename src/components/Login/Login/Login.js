import React from 'react';
import { useForm } from "react-hook-form";
import Navigation from '../../Shared/Navigation/Navigation';
import './Login.css';
import logInImg from '../../../img/loginImg.png';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const {user, isLoading, authError, loginUser} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        loginUser(data.email, data.password, history, location)
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="container my-5">
                <div className="row">
                    <div className="login-sec col-12 col-sm-12 col-md-7 col-lg-7">
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