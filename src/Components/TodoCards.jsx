import { useState } from 'react';

export const TodoCards = () => {
	const [state, setState] = useState({
		todos: [
			{
				id: null,
				desc: null,
			},
		],
	});

	const [todo, setTodo] = useState({
		desc: null,
	});
	console.log(todo);

	const handleChange = (event) => {
		console.log(event);
		setTodo({
			desc: event.target.value,
		});
	};

	console.log(todo);

	const personajes = [
		{
			nombre: 'Pato donal',
			novia: 'Dasy',
			edad: '200',
		},
		{
			nombre: 'Mikey',
			novia: 'Minie',
			edad: '500',
		},
	];

	return (
		<div>
			<form>
				<label>Tarea nueva</label>
				<input
					onChange={handleChange}
					type='text'
					placeholder='Escribe tu tarea'
				/>
				<button>Enviar</button>
				{/* {personajes.length > 0 ? (
					<p>Tengo pesonajes</p>
				) : (
					<p>No tengo personajes</p>
				)} */}
			</form>
		</div>
	);
};
