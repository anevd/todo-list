import React, { useContext } from "react";
import { globalContext } from "../../contexts/globalContext";
import Task from "../Task/Task";

function TaskList() {
	const { state } = useContext(globalContext);
	return (
		<div className="row">
			{state.list.map((task) => (
				<div key={task.id} className="col s12">
					<Task text={task.task} id={task.id} status={task.status} />
				</div>
			))}
		</div>
	);
}

export default TaskList;
