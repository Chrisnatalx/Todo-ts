import { Input } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
interface Props {
	saveTodo: (title: string) => void;
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
	const [inputValue, setinputValue] = useState("");
	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === "Enter" && inputValue !== "") {
			saveTodo(inputValue);
			setinputValue("");
		}
	};

	return (
		<Input
			value={inputValue}
			onChange={(e) => {
				setinputValue(e.target.value);
			}}
			onKeyDown={handleKeyDown}
			placeholder="¿Qué quieres hacer?"
			autoFocus
			width="400px"
		/>
	);
};
