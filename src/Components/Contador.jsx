import { useState } from 'react';

export const Contador = () => {
	const [numero, setNumero] = useState(0); // Inicializo mi estado

	//Funcion que sirve para sumar
	const suma = () => {
		setNumero(numero + 1);
	}; // Seteo mi estado sumando una unidad

	const resta = () => {
		console.log('click');
		if (numero > 0) {
			setNumero(numero - 1);
		}
	};

	const reset = () => {
		setNumero(0);
	};

	console.log(numero);

	return (
		<div className='App'>
			<h1>Contador: {numero}</h1>
			<button onClick={suma}>suma</button>
			<button onClick={resta}>resta</button>
			<button onClick={reset}>resetear</button>
		</div>
	);
};
