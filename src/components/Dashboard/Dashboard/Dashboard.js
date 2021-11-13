import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import './Dashboard.css';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AddProduct from '../../AddProduct/AddProduct';
import PaymentSystem from '../PaymentSystem/PaymentSystem';
import MyOrders from '../MyOrders/MyOrders';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import Reviews from '../Reviews/Reviews';



const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {isAdmin} = useAuth();
    const open = () => {
        document.getElementById("mySidebar").style.display = "block";
    }

    const close = () => {
        document.getElementById("mySidebar").style.display = "none";
    }

    return (
        <div>
            <Navigation></Navigation>
            <div class="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" style={{ width: '200px' }} id="mySidebar">
                <button onClick={close} class="w3-bar-item w3-button w3-large w3-hide-large">Close &times;</button>
                <Link className="w3-bar-item w3-button" to={`${url}`}>Dashboard</Link>
                <Link className="w3-bar-item w3-button" to={`${url}/myOrders`}>My Orders</Link>
                <Link className="w3-bar-item w3-button" to={`${url}/reviews`}>Review</Link>
                <Link className="w3-bar-item w3-button" to={`${url}/paymentSystem`}>Pay</Link>
               {isAdmin && <>
                <Link className="w3-bar-item w3-button" to={`${url}/makeAdmin`}>Make Admin</Link>
                <Link className="w3-bar-item w3-button" to={`${url}/manageAllOrders`}>Manage All Orders</Link>
                <Link className="w3-bar-item w3-button" to={`${url}/manageProducts`}>Manage Products</Link>
                <Link className="w3-bar-item w3-button" to={`${url}/addProducts`}>Add Products</Link>
                </>}
            </div>

            <div class="w3-main" style={{ marginLeft: '200px' }}>
                <div class="w3-teal">
                    <button onClick={open} class="w3-button w3-teal w3-xlarge w3-hide-large">&#9776;</button>
                    <div class="w3-container">
                        <h2>Dashboard</h2>
                    </div>
                </div>

                <div class="w3-container">
                    <Switch>
                        <Route exact path={path}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <h2>Make Admin</h2>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/addProducts`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/manageAllOrders`}>
                            <ManageOrders></ManageOrders>
                        </Route>
                        <Route path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                        <Route path={`${path}/paymentSystem`}>
                            <PaymentSystem></PaymentSystem>
                        </Route>
                        <Route path={`${path}/reviews`}>
                           <Reviews></Reviews>
                        </Route>
                    </Switch>

                </div>

            </div>
            
        </div>
    );
};

export default Dashboard;