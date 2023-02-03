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
      <span style={{ fontSize: "18px", fontFamily: "cursive" }}>{text}</span>
      <span
        style={{
          color: "red",
          cursor: "pointer",
          marginLeft: "10px",
        }}
        onClick={() => removeTask(id)}
      >
        &times;
      </span>
    </li>
  );
};

export default ToDoItem;
