import React from "react";
import { useState } from "react";
import "./index.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { globalContext as GlobalContext } from "./contexts/globalContext";
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
			<GlobalContext.Provider value={{ task, setTask, list, setList, handleSubmit, status, setStatus }}>
				<Header />
				<Main />
				<Footer />
			</GlobalContext.Provider>
		</>
	);
}

export default App;
