import React from "react";
import { useState } from "react";

function TaskList({ text }) {
	const [checked, setChecked] = useState(false);
	const resolvedClass = {
		textDecoration: "line-through",
	};
	return (
		<div className="card horizontal">
			<div className="card-stacked">
				<div className="card-content">
					<p>
						<label>
							<input type="checkbox" className="filled-in" defaultChecked={checked} onChange={() => setChecked((state) => !state)} />
							<span style={checked === true ? resolvedClass : {}}>{text}</span>
						</label>
					</p>
				</div>
			</div>
		</div>
	);
}

export default TaskList;
