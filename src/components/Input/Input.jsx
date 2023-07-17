import React, { useContext } from "react";
import { globalContext } from "../../contexts/globalContext";
import { useState } from "react";

function Input() {
	const { dispatch } = useContext(globalContext);
	const [task, setTask] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		dispatch({
			type: "ADD_TASK",
			payload: {
				task,
				status: false,
				id: Date.now(),
			},
		});
		setTask("");
	}

	return (
		<form className="row" onSubmit={handleSubmit}>
			<div className="col s12">
				<div className="input-field col s6">
					<input
						id="task"
						type="text"
						value={task}
						className="validate blue-grey-text text-darken-3"
						required
						onChange={(event) => {
							setTask(event.target.value);
						}}
					/>
					<label className="active blue-grey-text text-lighten-2" htmlFor="task">
						Введите задачу:
					</label>
				</div>
			</div>
			<button className="waves-effect waves-light btn-small blue lighten-3">Добавить</button>
		</form>
	);
}

export default Input;
