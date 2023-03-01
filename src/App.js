import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './Components/Nav/Nav';
import  ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import { Productos } from './Views/Productos/Productos';
import { Home } from './Views/Home/Home';



function App() {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/productos' element={<Productos/>} />
				<Route path='/usuarios' element={<p>Usuarios</p>} />
				<Route path='/*' element={<ErrorPage/>} />
			</Routes>
			<p>Footer</p>
		</div>
	);
}

export default App;
