import React from 'react'
import "./Product.css";

function Product() {
  return (
    <div className='product'>
        <div clasName="product__info">
            <p>The lean startup</p>
            
            <p className="product__price">
                
                <small>$</small>
                <strong>19.99</strong>
            
            </p>
            <div className="product__rating">
                <p></p>    
            
            </div>   
        </div>
    </div>
  )
}

export default Product