import React from "react";

interface InputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  addTask: () => void;
}

const InputField: React.FC<InputProps> = ({ text, setText, addTask }) => {
  return (
    <label>
      <input value={text} onChange={(e) => setText(e.target.value)} />{" "}
      <button onClick={addTask}>Add Task</button>
    </label>
  );
};

export default InputField;
