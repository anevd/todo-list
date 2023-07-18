import React from "react";
import styles from "./task.module.css";

function Task({ list, setList, text, id, status }) {
	function changeStatus(id) {
		const newList = [...list];
		newList.map((el) => {
			if (el.id === id) {
				el.status = !el.status;
			}
		});
		setList(newList);
	}

	return (
		<div className="card horizontal">
			<div className="card-stacked">
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
				</div>
			</div>
		</div>
	);
}

export default Task;
