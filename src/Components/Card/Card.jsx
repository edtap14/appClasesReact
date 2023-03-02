import React from 'react'
import './Card.css'

const Card = ({ 
    title,
    description,
    category,
    discountPercentage,
    images,
    price, 
    rating,
    stock,
    thumbnail,
}) => {  

  return (
    <div className='divCard'>
        
            <h1>Product: <span>{title}</span></h1>
            <p>Description: <span>{description}</span></p>
            <p>Category: <span>{category}</span></p>
            <p>DiscountPercentage: <span>{discountPercentage}</span></p>
            <p>price: <span>{price}</span></p>
            <p>rating: <span>{rating}</span></p>
            <p>stock: <span>{stock}</span></p>
        
            <img src={thumbnail} />
    </div>
  )
}

export default Card;


// los objetos se destructuran como se marca en la linea 3