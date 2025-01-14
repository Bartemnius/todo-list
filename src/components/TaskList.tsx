const TaskList = () => {
    const tasks = [
        {id:1, title: "Learn React"},
        {id:2, title: "Learn React 2"}
    ];

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;