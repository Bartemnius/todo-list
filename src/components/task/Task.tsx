import React from "react"

export interface TaskType {
    id: number,
    title: string,
};

interface TaskProps {
    id: number,
    title: string,
    onRemove: (id: number) => void
};

const Task: React.FC<TaskProps>  = ({ id, title, onRemove }) => {
    return (
        <li>
            <span>{title}</span>
            <button onClick={() => onRemove(id)}>Delete</button>
        </li>
    )
};

export default Task;