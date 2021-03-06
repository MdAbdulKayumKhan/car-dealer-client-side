import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user, isLoading } = useAuth();
    useEffect(() => {
        fetch('https://safe-brook-81042.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOrders(data)
            })
    }, [])
    let i = 1;

    const handleDelete = id => {
        console.log(id);
        const deleteNow = window.confirm('Are Sure wants to delete?');
        if (deleteNow) {
            fetch(`https://safe-brook-81042.herokuapp.com/manageServices/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);

                    }
                })
        }
    }

    const handleStatusChange = id =>{
        const url = `https://safe-brook-81042.herokuapp.com/updateStatus/${id}`;
        fetch(url, {
            method: 'PUT'
           
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Status Updated Successfully')
                window.location.reload();
            }
        })
    }
    return (
        <div>
            <h3>Manage All Orders</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Product</th>
                        <th scope="col">address</th>
                        <th scope="col">phone</th>
                        <th scope="col">status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {!isLoading &&
                    <tbody>
                    {
                        orders.map(order => (
                            <tr key={order._id}>
                                <th scope="row">{i++}</th>
                                <td>{order.name}</td>
                                <td>{order.serviceName}</td>
                                <td>{order.address}</td>
                                <td>{order.phone}</td>
                                <td>{order.status}</td>
                                <td><button onClick={()=> handleStatusChange(order._id)} type="button" className="btn btn-warning">{order.status}</button></td>
                                <td><button onClick={()=> handleDelete(order._id)} type="button" className="btn btn-danger">Delete</button></td>
                            </tr>
                        ))
                    }


                </tbody>}
                {isLoading &&
                    <div class="spinner-grow text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                }
            </table>

        </div>
    );
};

export default ManageOrders;