import React, { useReducer } from "react";
import "./index.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { globalContext as GlobalContext } from "./contexts/globalContext";
import { useLocalStorage } from "./components/hooks/useLocalStorage";
import { reducer } from "./reducers/reducer";

function App() {
	const initialState = {
		list: [],
	};

	const [state, dispatch] = useReducer(reducer, initialState);
	// const [list, setList] = useLocalStorage([], "plan");

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
