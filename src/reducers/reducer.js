export function reducer(state, action) {
	switch (action.type) {
		case "ADD_TASK": {
			const newTask = action.payload;
			return { ...state, list: [newTask, ...state.list] };
		}
		case "DELETE_TASK": {
			const deleteTaskId = action.payload;
			return { ...state, list: state.list.filter((el) => el.id !== deleteTaskId) };
		}
		case "CHANGE_STATUS": {
			const changeStatusId = action.payload;
			return {
				...state,
				list: state.list.map((el) => {
					if (el.id === changeStatusId) {
						el.status = !el.status;
					}
					return el;
				}),
			};
		}
		case "EDIT_TASK": {
			const editedTask = action.payload;
			return {
				...state,
				list: state.list.map((el) => {
					if (el.id === editedTask.id) {
						el.task = editedTask.value;
					}
					return el;
				}),
			};
		}
		default: {
			return state;
		}
	}
}
