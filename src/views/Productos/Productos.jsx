import React, { useEffect, useState } from 'react';
import './Productos.css';

const Productos = () => {
	const [productos, setProductos] = useState({
		limit: 0,
		products: [],
		skip: 0,
	});

	console.log(productos);

	const getProductos = () => {
		try {
			fetch('https://dummyjson.com/products')
				.then((res) => res.json())
				.then((data) => setProductos(data));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProductos();
	}, []);

	console.log(productos);
	return (
		<div>
			<p>Hola desde productos</p>
		</div>
	);
};

export default Productos;
