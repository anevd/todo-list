import { useState } from "react";
import "./index.css";
import Input from "./components/Input/Input";
import TaskList from "./components/TaskList/TaskList";

function App() {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);
	function handleSubmit(event) {
		event.preventDefault();
		const todo = {
			task,
			id: Date.now(),
		};
		setList((prev) => [todo, ...prev]);
		setTask("");
	}
	return (
		<>
			<main className="container">
				<Input text={task} setTask={setTask} handleSubmit={handleSubmit} />
				<TaskList list={list} />
			</main>
		</>
	);
}

export default App;
