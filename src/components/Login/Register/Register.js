import React from 'react';
import { useForm } from "react-hook-form";
import './Register.css';
import regi from '../../../img/regi.png';
import Navigation from '../../Shared/Navigation/Navigation';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router';

const Register = () => {
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        if (data.password !== data.password2) {
            alert('Password not matched!  Please Try again');
            return;
        }
        registerUser(data.email, data.password, data.name, history)
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="container my-5">
                <div className="row">
                    <div className="car-img col-12 col-sm-12 col-md-5 col-lg-5">
                        <img className="img-fluid" src={regi} alt="" />
                    </div>
                    <div className="login-sec col-12 col-sm-12 col-md-7 col-lg-7">
                        <h1>Registration</h1>
                        <div className="login">
                            {!isLoading &&
                                <form className="bg-img" onSubmit={handleSubmit(onSubmit)}>
                                    <input type="text" {...register("name", { required: true })} placeholder="Your Name" />
                                    <input type="email" {...register("email", { required: true })} placeholder="Your Email" />
                                    <input type="password" {...register("password", { required: true })} placeholder="Your Password" />
                                    <input type="password" {...register("password2", { required: true })} placeholder="Re-Enter Your Password" />
                                    <input type="submit" value="Register" />
                                </form>}
                            {isLoading && <div class="spinner-border text-warning" role="status">
                                <span class="sr-only"></span>
                            </div>}
                            {user?.email &&
                                <div class="alert alert-primary mt-5" role="alert">
                                    Congrats! Successfully Register...
                                </div>
                            }
                            {authError &&
                                <div class="alert alert-warning mt-5" role="alert">
                                    {authError}
                                </div>
                            }
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;