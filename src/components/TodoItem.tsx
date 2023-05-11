/* eslint-disable react/prop-types */
import { Box, Button, ListItem } from "@chakra-ui/react";
import "../App.css";
interface Props {
	id: string;
	description: string;
	completed: boolean;
	removeTodo: (id: string) => void;
	setCompleted: (id: string, completed: boolean) => void;
}

export const TodoItem: React.FC<Props> = ({
	id,
	description,
	completed,
	removeTodo,
	setCompleted,
}) => {
	return (
		<Box
			width="400px"
			display="flex"
			flexDirection="row"
			justifyContent={"space-between"}
			mt={4}
		>
			<input
				className="toggle"
				checked={completed}
				type="checkbox"
				onChange={(e) => {
					setCompleted(id, e.target.checked);
				}}
			></input>
			<ListItem className={`${completed ? "completed" : ""}`}>
				{description}
			</ListItem>
			<Button
				variant="outline"
				colorScheme="blue"
				onClick={() => {
					removeTodo(id);
				}}
			>
				Eliminar
			</Button>
		</Box>
	);
};
