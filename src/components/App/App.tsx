// import { useEffect, useState } from "react";
import { useState } from "react";
import React from "react";
import InputField from "../InputField";
import ToDoList from "../ToDoList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<JSX.Element[]>([]);
  const [text, setText] = useState<string>("");

  const toggleTask = (taskId: number) => {
    setTasks(() =>
      tasks.map((task) => {
        if (task.id !== taskId) return task;

        return {
          ...task,
          completed: !task.completed,
        };
      })
    );
  };

  const removeTask = (taskId: number) => {
    setTasks(() => tasks.filter((task) => task.id !== taskId));
  };

  const addTask = () => {
    if (text.length) {
      setTasks(() => [
        ...tasks,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
      setText("");
    }
  };

  return (
    <div className="App">
      <InputField text={text} setText={setText} addTask={addTask} />
      <ToDoList tasks={tasks} removeTask={removeTask} toggleTask={toggleTask} />
    </div>
  );
}

//////////////////////////////////////////////////

//   const url = "https://randomuser.me/api";

//   const [user, setUser] = useState("");
//   const [userFoto, setUserFoto] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         setUser(JSON.stringify(data));
//         setFirstName(data.results[0].name.first);
//         setLastName(data.results[0].name.last);
//         setUserFoto(data.results[0].picture.large);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <p>{user}</p>
//       <p>
//         <span>{firstName}</span> <span>{lastName}</span>
//       </p>
//       <img src={userFoto} alt="foto" />
//     </div>
//   );
// }

////////////////////counter///////////////////////////

//   const [count, setCount] = useState(0);

//   const increase = () => {
//     setCount(() => count + 1);
//   };

//   return (
//     <div className="App">
//       <p>{count}</p>
//       <button onClick={increase}>Click for Increase</button>
//     </div>
//   );
// }

/////////////////////////////////////////////////////

export default App;
