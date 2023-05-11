import { useState } from "react";
import "./App.css";
import { Center } from "@chakra-ui/react";
import { TodoList } from "./components/TodoList";
import { Header } from "./components/Header";

const initialState = [
	{
		id: crypto.randomUUID(),
		description: "Aprendiendo React",
		completed: true,
	},
	{
		id: crypto.randomUUID(),
		description: "Aprendiendo Typescript",
		completed: true,
	},
	{
		id: crypto.randomUUID(),
		description: "Creando TodoList",
		completed: false,
	},
];

function App() {
	const [todos, setTodos] = useState(initialState);

	const removeTodo = (id: string): void => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};
	const handleCompleted = (id: string, completed: boolean): void => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					completed,
				};
			}
			return todo;
		});
		setTodos(newTodos);
	};
	const handleSave = (description: string): void => {
		const newTodo = {
			id: crypto.randomUUID(),
			description,
			completed: false,
		};

		setTodos([...todos, newTodo]);
	};

	return (
		<>
			<Center display="flex" flexDirection="column" justifyContent="center">
				<Header saveTodo={handleSave} />
				<TodoList
					todos={todos}
					removeTodo={removeTodo}
					setCompleted={handleCompleted}
				/>
			</Center>
		</>
	);
}

export default App;
