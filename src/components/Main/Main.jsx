import React from "react";
import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Input from "../Input/Input";
import TaskList from "../TaskList/TaskList";

function Main() {
	const [task, setTask] = useState("");
	const [list, setList] = useLocalStorage([], "plan");
	function handleSubmit(event) {
		event.preventDefault();
		const todo = {
			task,
			status: false,
			id: Date.now(),
		};
		setList((prev) => [todo, ...prev]);
		setTask("");
	}
	return (
		<main className="container">
			<Input text={task} setTask={setTask} handleSubmit={handleSubmit} />
			<TaskList list={list} setList={setList} />
		</main>
	);
}

export default Main;
