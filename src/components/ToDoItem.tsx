import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { removeTask, toggleTask } from "../store/todoSlice";

interface ItemProps {
  id: string;
  text: string;
  completed: boolean;
  toggleTask: (taskId: string) => void;
  removeTask: (taskId: string) => void;
}

const ToDoItem: React.FC<ItemProps> = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTask({ id }))}
      />
      <span
        style={{
          fontSize: "18px",
          fontFamily: "cursive",
          marginLeft: "8px",
          // textDecoration: "lineThrough",
        }}
      >
        {text}
      </span>
      <span
        style={{
          color: "red",
          cursor: "pointer",
          marginLeft: "10px",
        }}
        onClick={() => dispatch(removeTask({ id }))}
      >
        &times;
      </span>
    </li>
  );
};

export default ToDoItem;
