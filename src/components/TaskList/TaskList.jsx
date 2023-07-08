import React from "react";
import Task from "../Task/Task";

function TaskList({ list }) {
	return (
		<div className="row">
			{list.map((task) => (
				<div key={task.id} className="col s12">
					<Task text={task.task} completed={task.defaultChecked} />
				</div>
			))}
		</div>
	);
}

export default TaskList;
