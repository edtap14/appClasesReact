import './Producto.css';
import { Link } from 'react-router-dom';
export const Producto = ({
	brand,
	category,
	description,
	discountPercentage,
	images,
	price,
	id,
	rating,
	stock,
	thumbnail,
	title,
	setDetailId,
}) => {
	const handleClick = (id) => {
		setDetailId(id);
	};

	return (
		<div className='divPrincipalProducto'>
			<p className='titleProduct'>{title.toUpperCase()}</p>
			<img className='imgProducto' src={thumbnail} />
			<p className='descProducto'>{description}</p>
			<p>Categoria: {category}</p>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}>
				<p> Precio: ${price}.00</p>
				<Link to={`/producto/${id}`}>
					<button
						className='buttonProducto'
						onClick={() => handleClick(id)}>
						Info
					</button>
				</Link>
			</div>
		</div>
	);
};
