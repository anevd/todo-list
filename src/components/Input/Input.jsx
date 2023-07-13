import React, { useContext } from "react";
import { globalContext } from "../../contexts/globalContext";

function Input() {
	const { task, setTask, handleSubmit } = useContext(globalContext);
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
