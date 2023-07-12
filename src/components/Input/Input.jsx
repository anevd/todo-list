import React from "react";

function Input({ text, setTask, handleSubmit }) {
	return (
		<form className="row" onSubmit={handleSubmit}>
			<div className="col s12">
				<div className="input-field col s6">
					<input
						id="task"
						type="text"
						value={text}
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
