import React from "react";
import Task from "../Task/Task";

function TaskList({ list, setList }) {
	return (
		<div className="row">
			{list.map((task) => (
				<div key={task.id} className="col s12">
					<Task list={list} setList={setList} text={task.task} id={task.id} status={task.status} />
				</div>
			))}
		</div>
	);
}

export default TaskList;
