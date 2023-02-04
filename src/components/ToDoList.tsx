import { useSelector } from "react-redux/es/exports";
import ToDoItem from "./ToDoItem";

// interface ListProps {
//   tasks: [];
//   // id: number;
//   removeTask: (taskId: number) => void;
//   toggleTask: (taskId: number) => void;
// }

const ToDoList: React.FC /*<ListProps>*/ = () => {
  const tasks = useSelector((state: any) => state.todos.todos);

  return (
    <ul style={{ textAlign: "center", listStyle: "none" }}>
      {tasks.map((task: any) => (
        <ToDoItem
          key={task.id}
          // removeTask={removeTask}
          // toggleTask={toggleTask}
          {...task}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
