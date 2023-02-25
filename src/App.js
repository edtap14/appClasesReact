// import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './Components/Nav/Nav';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Views/Home/Home'
import { Productos } from './Views/Productos/Productos';
import { Usuarios } from './Views/Usuarios/Usuarios'
import { Error } from './Views/404/Error'

function App() {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/productos' element={<Productos />} />
				<Route path='/usuarios' element={<Usuarios/>} />
				<Route path='/*' element={<Error />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
