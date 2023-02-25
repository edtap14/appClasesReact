import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './Components/Nav/Nav';
import Home from './views/Home/Home';
import PaginaNotFound from './views/PaginaNotFound/PaginaNotFound';
import Productos from './views/Productos/Productos';

function App() {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/productos' element={<Productos />} />
				<Route path='/usuarios' element={<p>Usuarios</p>} />
				<Route path='/*' element={<PaginaNotFound />} />
			</Routes>
			<p>Footer</p>
		</div>
	);
}

export default App;
