import React from 'react'

export const Carousel = ({
    images,
    title,
    id,
}) => {
    return (
            <div >
                <img  src={images} alt={title}/>
            </div>
  )
}
