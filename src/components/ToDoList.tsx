import ToDoItem from "./ToDoItem";

interface ListProps {
  tasks: [];
  id: number;
  removeTask: (taskId: number) => void;
  toggleTask: (taskId: number) => void;
}

const ToDoList: React.FC<ListProps> = ({ tasks, removeTask, toggleTask }) => {
  return (
    <ul>
      {tasks.map<JSX.Element>((task) => (
        <ToDoItem
          key={task.id}
          removeTask={removeTask}
          toggleTask={toggleTask}
          {...task}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
