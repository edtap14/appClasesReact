import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './Components/Nav/Nav';
import  ErrorPage  from './Components/ErrorPage/ErrorPage.jsx';



function App() {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path='/' element={<p>Primer componente</p>} />
				<Route path='/productos' element={<p>Productos</p>} />
				<Route path='/usuarios' element={<p>Usuarios</p>} />
				<Route path='/*' element={<ErrorPage/>} />
			</Routes>
			<p>Footer</p>
		</div>
	);
}

export default App;
