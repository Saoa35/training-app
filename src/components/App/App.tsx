// import { useEffect, useState } from "react";
import { useState } from "react";
import React from "react";
import InputField from "../InputField";
import ToDoList from "../ToDoList";
import "./App.css";
import { useDispatch } from "react-redux/es/exports";
import { addTask } from "../../store/todoSlice";

function App() {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(addTask({ text }));
    setText("");
  };

  return (
    <div className="App">
      <InputField text={text} setText={setText} addTask={addTodo} />
      <ToDoList />
    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
