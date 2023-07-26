import React from "react";
import "./index.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { globalContext as GlobalContext } from "./contexts/globalContext";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
	const initialState = {
		list: [],
	};

	const [state, dispatch] = useLocalStorage(initialState, "plan");

	return (
		<>
			<GlobalContext.Provider value={{ state, dispatch }}>
				<Header />
				<Main />
				<Footer />
			</GlobalContext.Provider>
		</>
	);
}

export default App;
