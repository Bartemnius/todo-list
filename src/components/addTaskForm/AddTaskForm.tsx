import React, { useState } from "react";

interface AddTaskFormProps {
    onAddTask: (title: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({onAddTask}) => {
        const [taskTitle, setTaskTitle] = useState("");

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            if(taskTitle.trim() === "") return;
            onAddTask(taskTitle);
            setTaskTitle("");
        }

        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    placeholder="Enter task title"
                />
                <button type="submit">Add Task</button>
            </form>
        );  
};

export default AddTaskForm;