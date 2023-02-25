import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export const Nav = () => {
	return (
		<div className='divNav'>
			<div className='links'>
				<li>Home</li>
				<li>Productos</li>
				<li>Usuarios</li>
			</div>
		</div>
	);
};
