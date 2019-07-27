import React from 'react';
import Task from '../task/task.js';

const Tasklist=({tasks,token,onRouteChange})=>{
	const TaskComponent=tasks.map((user, i)=>{
		return <Task
		createdAt={tasks[i].createdAt}
		updatedAt={tasks[i].updatedAt}
		description={tasks[i].description}
		completed={tasks[i].completed}
		token={token}
		onRouteChange={onRouteChange}
		id={tasks[i]._id}
		/>
	})
	return(
		<div>
		{TaskComponent}
		</div>
		);
}

export default Tasklist;