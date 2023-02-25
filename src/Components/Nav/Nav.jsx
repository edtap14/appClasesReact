import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
export const Nav = () => {
	return (
		<div className='divNav'>
			<Link className='links' to='/'>
				Home
			</Link>
			<Link className='links' to='/productos'>
				Productos
			</Link>
			<Link className='links' to='/Usuarios'>
				Usuarios
			</Link>
		</div>
	);
};
