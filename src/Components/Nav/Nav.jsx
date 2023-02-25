import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export const Nav = () => {
	return (
		<div className='divNav'>
			<div className='links'>
				<li><Link to={'/'} className='Link'>Home</Link></li>
				<li><Link to={'/productos'} className='Link'>Productos</Link></li>
				<li><Link to={'/usuarios'} className='Link'>Usuarios</Link></li>
			</div>
		</div>
	);
};
