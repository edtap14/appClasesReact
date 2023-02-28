import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export const Nav = () => {
	return (
		<div className='divNav'>
			<div className='links'>
				<li><Link to={'/Home'} className='Link'>Home</Link></li>
				<Link to={'/productos'} className='Link'>Productos</Link>
				<Link to={'/usuario'} className='Link'>Usuarios</Link>
				
			</div>
		</div>
	);
};
