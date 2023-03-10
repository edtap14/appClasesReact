import React, { useEffect, useState } from 'react'

export const DitailProducto = ({ id }) => {
    const [data, setData] = useState({})
    const { brand, category, description, discontPercentage, images, price, rating, stock, thumbnail, title } = data

    const getProducto = () => {
        try {

            fetch(`https://dummyjson.com/products/${id}`)
                .then((res) => res.json())
                .then((data) => setData(data))

        } catch (error) {
            console.log(error)
        }
    }

    console.log(data)

    useEffect(() => {
        getProducto()
    }, [])


    return (
        <div>
            <p>Entraste al detalle del producto: {title} </p>
            <p>Marca: {brand}</p>
            <img src={thumbnail} alt={thumbnail} />
            {
                images?.map((img, index) => <img key={index} style={{ width: '100px', height: '100px' }} src={img} />)
            }
        </div>
    )
}
