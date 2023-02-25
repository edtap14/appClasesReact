import React from 'react';
import { Link } from 'react-router-dom';
import './PaginaNotFound.css';

const PaginaNotFound = () => {
	return (
		<div className='divBoxGeneralError'>
			<div className='tituloError'>
				<h1>404</h1>
			</div>
			<div className='divBoxErrorText'>
				<p>
					Lo sentimos, la ruta que estás buscando no es posible
					mostrarla
				</p>
				<p>Llama Mastemprano...Alguien Vendrá en tu ayuda</p>
			</div>
		</div>
	);
};

export default PaginaNotFound;
