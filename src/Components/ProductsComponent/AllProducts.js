import React, { useEffect } from 'react'
import { getProductList } from '../../Services/productApiFunctions'
import './AllProducts.scss'
import SingleProduct from './SingleProduct'

const AllProducts = () => {

    useEffect(() => {
        getProductList();
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

                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />



                    </div>
                </div>
                <div className="row">

                </div>
            </div>
        </div>
    )
}

export default AllProducts
