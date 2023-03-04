import './Productos.css';
import { url } from '../../Varibles/variables';
import { useEffect, useState } from 'react';
import { Producto } from '../../Components/Producto/Producto';

export const Productos = ({ setId }) => {
	const [products, setProducts] = useState({
		limit: {
			cantidad: 0,
			precio: 0
		},
		products: [],
		skip: 0,
		total: 0,
	});

	const getProductos = () => {
		try {
			fetch('https://dummyjson.com/products')
				.then((res) => res.json())
				.then((data) => setProducts(data));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProductos();
	}, []);


	return (
		<div className='Productos'>
			<div>
				{/* {
					products?.products?.map( (products) => {
						
						return(
							<div key={products.id}>
								<p>Marca: {products?.brand}</p>
								<p>Categoria: {products?.category}</p>
								<p>precio: {products?.price}</p>
							</div>
						)
					})
				} */}
				{
					products?.products?.map(chuchita => {
						return (

							<Producto
								key={chuchita.id}
								id={chuchita.id}
								categoria={chuchita?.category}
								precio={chuchita?.price}
								marca={chuchita?.brand}
								setId={setId}
							/>
						)
					})
				}
			</div>
		</div>

	);
};

