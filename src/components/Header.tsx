import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { CreateTodo } from "./CreateTodo";

interface Props {
	saveTodo: (description: string) => void;
}
export const Header: React.FC<Props> = ({ saveTodo }) => {
	return (
		<>
			<Flex alignItems="center">
				<Text fontSize="5xl">Todo</Text>
				<Image
					style={{ width: "60px", height: "auto" }}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
				/>
			</Flex>

			<CreateTodo saveTodo={saveTodo} />
		</>
	);
};
