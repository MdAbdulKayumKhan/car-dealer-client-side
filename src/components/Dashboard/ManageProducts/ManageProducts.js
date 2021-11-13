import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const { isLoading } = useAuth();
    useEffect(() => {
        fetch('https://safe-brook-81042.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])

    let i = 1;
    const handleDelete = id => {
        console.log(id);
        const deleteNow = window.confirm('Are Sure wants to delete?');
        if (deleteNow) {
            fetch(`https://safe-brook-81042.herokuapp.com/manageProducts/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);

                    }
                })
        }
    }
    return (
        <div>
            <h3>Manage Products</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">img</th>
                        <th scope="col">Product</th>
                        <th scope="col">brand</th>
                        <th scope="col">price</th>
                        <th scope="col">description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                
                    <tbody>
                    {
                        products.map(product => (
                            <tr key={product._id}>
                                <th scope="row">{i++}</th>
                                <td><img className="img-fluid" style={{width: '200px', height: '100px'}} src={product.img} alt="" /></td>
                                <td>{product.name}</td>
                                <td>{product.brand}</td>
                                <td>{product.price}</td>
                                <td>{product.description.slice(0, 100)}</td>
                                <td><button onClick={()=> handleDelete(product._id)} type="button" className="btn btn-danger">Delete</button></td>
                            </tr>
                        ))
                    
                        }

                </tbody>
               
            </table>
        </div>
    );
};

export default ManageProducts;