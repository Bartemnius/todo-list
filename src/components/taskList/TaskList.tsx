import React, { useState } from "react";
import Task, { TaskType } from "../task/Task";
import AddTaskForm from "../addTaskForm/AddTaskForm";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn React 2" },
    { id: 3, title: "Learn React 3" },
  ]);

  const addTask = (title: string) => {
    const newTask: TaskType = {
      id: tasks.length + 1,
      title,
    };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id: number, newTitle: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task,
      ),
    );
  };

  return (
    <div className="app-container">
      <h2>Task List</h2>
      <AddTaskForm onAddTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            onRemove={removeTask}
            onUpdate={updateTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
