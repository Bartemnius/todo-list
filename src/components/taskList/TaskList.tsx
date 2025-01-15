import React, { useState } from "react";
import Task, {TaskType} from "../task/Task"

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<TaskType[]>([
        {id:1, title: "Learn React"},
        {id:2, title: "Learn React 2"},
        {id:3, title: "Learn React 3"}
    ]);

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <Task key={task.id} {...task} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;