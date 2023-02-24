import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './Components/Nav/Nav';

function App() {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path='/' element={<p>Primer componente</p>} />
				<Route path='/productos' element={<p>Productos</p>} />
				<Route path='/usuarios' element={<p>Usuarios</p>} />
				<Route path='/*' element={<p>Pagina no encontrada</p>} />
			</Routes>
			<p>Footer</p>
		</div>
	);
}

export default App;
