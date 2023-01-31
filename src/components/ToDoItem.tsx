import React from "react";

interface ItemProps {
  id: number;
  text: string;
  completed: boolean;
  toggleTask: (taskId: number) => void;
  removeTask: (taskId: number) => void;
}

const ToDoItem: React.FC<ItemProps> = ({
  id,
  text,
  completed,
  toggleTask,
  removeTask,
}) => {
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTask(id)}
      />
      <span>{text}</span>
      <span
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => removeTask(id)}
      >
        &times;
      </span>
    </li>
  );
};

export default ToDoItem;