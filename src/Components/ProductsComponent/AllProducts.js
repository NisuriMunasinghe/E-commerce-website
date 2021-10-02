import React, { useEffect, useState } from 'react'
import { getProductList } from '../../Services/productApiFunctions'
import './AllProducts.scss'
import SingleProduct from './SingleProduct'

const AllProducts = () => {
    const [items, setItems] = useState({});

    useEffect(() => {
        getProductList().then((res) => {
            setItems(res.data);
            console.log(res.data);

        });

    }, [])



    return (
        <div className="row px-5">
            <div className="col-md-3">
                <h4>Sizes</h4>
                <diV className="container d-flex flex-row col-md-12">
                    <button className="single-size">XS</button>&nbsp;
                    <button className="single-size">XS</button>&nbsp;
                    <button className="single-size">XS</button>&nbsp;
                    <br />
                    <button className="single-size">XS</button>&nbsp;
                    <button className="single-size">XS</button>&nbsp;
                    <button className="single-size">XS</button>&nbsp;
                    <button className="single-size">XS</button>&nbsp;


                </diV>
            </div>
            <div className="col-md-9">
                <div className="container col-md-12">
                    <div className="row col-md-12">
                        {items.map((product) => (
                            <SingleProduct key={product.id} product={product} />
                        ))}





                    </div>
                </div>
                <div className="row">

                </div>
            </div>
        </div>
    )
}

export default AllProducts
