// import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './Components/Nav/Nav';
import { Footer } from './Components/Footer/Footer';
import { Home } from './views/Home/Home';
import { Productos } from './views/Productos/Productos';
import { Usuarios } from './views/Usuarios/Usuarios';
import { Error } from './views/404/Error';

function App() {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/productos' element={<Productos />} />
				<Route path='/usuarios' element={<Usuarios />} />
				<Route path='/*' element={<Error />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
