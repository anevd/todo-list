import React, { useContext } from "react";
import { globalContext } from "../../contexts/globalContext";
import Task from "../Task/Task";

function TaskList() {
	const { list } = useContext(globalContext);
	return (
		<div className="row">
			{list.map((task) => (
				<div key={task.id} className="col s12">
					<Task text={task.task} />
				</div>
			))}
		</div>
	);
}

export default TaskList;
