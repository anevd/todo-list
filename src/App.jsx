import { useState } from "react";
import "./index.css";
import Input from "./components/Input/Input";
import TaskList from "./components/TaskList/TaskList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useLocalStorage } from "./components/hooks/useLocalStorage";

function App() {
	const [task, setTask] = useState("");
	const [status, setStatus] = useState(false);
	const [list, setList] = useLocalStorage([], "plan");
	function handleSubmit(event) {
		event.preventDefault();
		const todo = {
			task,
			status,
			id: Date.now(),
		};
		setList((prev) => [todo, ...prev]);
		setTask("");
	}
	return (
		<>
			<Header />
			<main className="container">
				<Input text={task} setTask={setTask} handleSubmit={handleSubmit} />
				<TaskList list={list} />
			</main>
			<Footer />
		</>
	);
}

export default App;
