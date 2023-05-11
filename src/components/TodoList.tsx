/* eslint-disable react/prop-types */
import { Center, List, UnorderedList } from "@chakra-ui/react";
import { Todo as TodoType } from "../types";
import { TodoItem } from "./TodoItem";

interface Props {
	todos: TodoType[];
	removeTodo: (id: string) => void;
	setCompleted: (id: string, completed: boolean) => void;
}

export const TodoList: React.FC<Props> = ({
	todos,
	removeTodo,

	setCompleted,
}) => {
	return (
		<Center>
			<UnorderedList>
				{todos?.map((todo) => (
					<List key={todo.id}>
						<TodoItem
							key={todo.id}
							id={todo.id}
							description={todo.description}
							completed={todo.completed}
							removeTodo={removeTodo}
							setCompleted={setCompleted}
						></TodoItem>
					</List>
				))}
			</UnorderedList>
		</Center>
	);
};
