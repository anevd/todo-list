import React from "react";
import styles from "./task.module.css";
import { useState, useContext } from "react";
import { globalContext } from "../../contexts/globalContext";

function Task({ text, id, status }) {
	const { dispatch } = useContext(globalContext);
	const [edit, setEdit] = useState(null);
	const [value, setValue] = useState("");
	function deleteTask(id) {
		dispatch({
			type: "DELETE_TASK",
			payload: id,
		});
	}

	function changeStatus(id) {
		dispatch({
			type: "CHANGE_STATUS",
			payload: id,
		});
	}

	function editTask(id) {
		setEdit(id);
		setValue(text);
	}

	function handleSubmitEdit(event) {
		event.preventDefault();
		dispatch({
			type: "EDIT_TASK",
			payload: { id, value },
		});
		setEdit(null);
	}

	return (
		<div className="card horizontal">
			<div className="card-stacked">
				{edit === id ? (
					<form className={styles.form__edit} onSubmit={handleSubmitEdit}>
						{" "}
						<label className="card-content">
							<input
								type="text"
								className="validate blue-grey-text text-darken-3"
								onChange={(event) => {
									setValue(event.target.value);
								}}
								value={value}
							/>
							<button className="waves-effect waves-light btn-small blue lighten-3">Сохранить</button>
						</label>
					</form>
				) : (
					<div className="card-content">
						<p>
							<label>
								<input
									type="checkbox"
									checked={status}
									className="filled-in"
									onChange={() => {
										changeStatus(id);
									}}
								/>
								<span className={status ? styles.resolvedClass : ""}>{text}</span>
							</label>
						</p>
						<div className="card-content_icons">
							<svg
								className="card-content_edit"
								onClick={() => {
									editTask(id);
								}}
								version="1.1"
								id="Layer_1"
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								viewBox="0 0 32 32"
								enableBackground="new 0 0 32 32">
								<g>
									<path
										fill="#9e9e9e"
										d="M1.673,20.297c-0.053,0.05-0.096,0.107-0.123,0.173c-0.145,0.204-0.255,0.431-0.285,0.68l-1.339,10.924
	l10.924-1.339c0.257-0.031,0.492-0.147,0.701-0.3c0.037-0.017,0.066-0.043,0.098-0.069c0.027-0.024,0.062-0.037,0.088-0.062
	l19.82-19.821c0.59-0.59,0.59-1.55,0-2.14l-7.899-7.899c-0.569-0.571-1.567-0.572-2.141,0l-19.82,19.82
	C1.687,20.273,1.682,20.287,1.673,20.297z M16.181,7.193l1.782,1.782L4.032,22.906c-0.744-0.986-1.194-1.754-1.41-2.154
	L16.181,7.193z M11.271,29.355c-0.767-0.467-1.479-0.947-2.132-1.432l13.886-13.886l1.782,1.782L11.271,29.355z M8.414,27.234
	c-0.026,0.026-0.039,0.057-0.058,0.087c-1.579-1.267-2.792-2.531-3.698-3.627L18.67,9.682l3.648,3.648L8.414,27.234z
	 M10.123,29.817L4.548,30.5c-1.894-0.283-2.865-2.485-3.057-2.974l0.68-5.551C3.197,23.646,5.613,26.916,10.123,29.817z
	 M1.277,29.269c0.331,0.503,0.776,1.04,1.349,1.467l-1.552,0.19L1.277,29.269z M22.224,1.151C22.32,1.053,22.45,1,22.587,1
	c0.138,0,0.267,0.053,0.363,0.15L30.85,9.05c0.2,0.2,0.2,0.526,0,0.726l-5.336,5.336l-8.626-8.626L22.224,1.151z"
									/>
								</g>
							</svg>
							<svg
								className="card-content_delete"
								onClick={() => {
									deleteTask(id);
								}}
								width="40"
								height="41"
								viewBox="0 0 40 41"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M3.33333 10.1426H36.6667M16.6667 18.476V26.8093M23.3333 18.476V26.8093M6.66666 10.1426H33.3333L30.7 33.8426C30.6097 34.6583 30.2218 35.4119 29.6104 35.9593C28.9991 36.5067 28.2073 36.8094 27.3867 36.8093H12.6133C11.7927 36.8094 11.0009 36.5067 10.3896 35.9593C9.77822 35.4119 9.39026 34.6583 9.3 33.8426L6.66666 10.1426ZM12.2417 5.38764C12.5112 4.81592 12.9378 4.33263 13.4717 3.99416C14.0055 3.65568 14.6246 3.47596 15.2567 3.47597H24.7433C25.3757 3.47565 25.9951 3.65521 26.5293 3.99371C27.0634 4.33221 27.4903 4.81566 27.76 5.38764L30 10.1426H10L12.2417 5.38764V5.38764Z"
									stroke="#FF4545"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Task;
