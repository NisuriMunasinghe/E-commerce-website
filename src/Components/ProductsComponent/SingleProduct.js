import React from 'react'
import "./SingleProduct.scss"

const SingleProduct = ({ product }) => {
    return (
        <div className="card1 col-md-4">

            <div class="d-flex flex-row-reverse">
                <div class="p-2 bg-dark text-white py-0">Free shipping</div>

            </div>
            <img src={product.details.image} class="card__image" className="col-md-12 product-image text-center" alt="" />
            <p className="item-title text-center pb-0">{product.name}</p>
            <h3 className="text-center pt-0">$ {product.details.price}</h3>
            <diV className="col-md-12 d-flex btn-container">
                <button className="btn-dark py-2 px-5 text-center  d-flex align-items-cente">Add to cart</button>
            </diV>
        </div>
    )
}

export default SingleProduct
