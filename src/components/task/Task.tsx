import React, { useState } from "react"

export interface TaskType {
    id: number,
    title: string,
};

interface TaskProps {
    id: number,
    title: string,
    onRemove: (id: number) => void,
    onUpdate: (id: number, newTitle: string) => void,
};

const Task: React.FC<TaskProps>  = ({ id, title, onRemove, onUpdate }) => {

    const [isEditing, setIsEditing] = useState(false); 
    const [newTitle, setNewTitle] = useState(title);

    const handleSave = () => {
        if(newTitle.trim() !== "") {
            onUpdate(id, newTitle);
            setIsEditing(false);
        } else {
            alert("Title cannot be empty!")
        }
    }

    return (
        <li>
        {isEditing ? (
            <div>
              {/* Input do edycji */}
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)} // Aktualizacja tymczasowego tytułu
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          ) : (
            <div>
              <span>{title}</span>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={() => onRemove(id)}>Delete</button>
            </div>
          )}
        </li>
    )
};

export default Task;