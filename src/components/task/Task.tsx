import React, { useState } from "react";

export interface TaskType {
  id: number;
  title: string;
}

interface TaskProps {
  id: number;
  title: string;
  onRemove: (id: number) => void;
  onUpdate: (id: number, newTitle: string) => void;
}

const Task: React.FC<TaskProps> = ({ id, title, onRemove, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleSave = () => {
    if (newTitle.trim() !== "") {
      onUpdate(id, newTitle);
      setIsEditing(false);
    } else {
      alert("Title cannot be empty!");
    }
  };

  return (
    <li>
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <span>{title}</span>
          <div>
            <button className="edit" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="delete" onClick={() => onRemove(id)}>
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Task;
