import React from 'react'
import style from './Card.css'

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
    <div className={style.divCard}>
        <h6>
            Product: <span>{title}</span>
            Description: <span>{description}</span>
            Category: <span>{category}</span>
            DiscountPercentage: <span>{discountPercentage}</span>
            images: <span>{images}</span>
            price: <span>{price}</span>
            rating: <span>{rating}</span>
            stock: <span>{stock}</span>
        </h6>
            <img src={thumbnail} />
    </div>
  )
}

export default Card;


// los objetos se destructuran como se marca en la linea 3