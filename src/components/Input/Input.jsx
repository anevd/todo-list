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
						className="validate"
						required
						onChange={(event) => {
							setTask(event.target.value);
						}}
					/>
					<label className="active" htmlFor="task">
						Введите задачу:
					</label>
				</div>
			</div>
			<button className="waves-effect waves-light btn-small">Добавить</button>
		</form>
	);
}

export default Input;
