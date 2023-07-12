import React from "react";
import Task from "../Task/Task";

function TaskList({ list }) {
	return (
		<div className="row">
			{list.map((task) => (
				<div key={task.id} className="col s12">
					<Task list={list} text={task.task} id={task.id} />
				</div>
			))}
		</div>
	);
}

export default TaskList;
