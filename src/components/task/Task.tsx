import React from "react"

export interface TaskType {
    id:number,
    title: string
};

const Task: React.FC<TaskType>  = ({title}) => {
    return <li>{title}</li>
};

export default Task;