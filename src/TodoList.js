import { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import './App.css'

import ToDO from "./ToDO";
import CreateList from "./CreateList";


export default function TodoList() {
  const [tasks, setTask] = useState([
    {
      title: "Yoga ",
      completed: false,
    },
  ]);

  const addList = title => {
    const newTask = [...tasks, { title, completed: false }];
    console.log(newTask);
    console.log(title);
    setTask(newTask);
  };

  const markComplete = index => {
    const newTask = [...tasks];
    newTask[index].completed = true;
    setTask(newTask);
  };

  const removetoDo = index => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTask(newTask);
  };

  return (
    <>
      <div className="main">
      <h1 className="App"> Todo List </h1>
      <CreateList addList={addList} />
      <div className="inputTask">
        {tasks.map((task, index) => (
          <div>
              <ToDO
                
                index={index}
                task={task}
                markComplete={markComplete}
                removetoDo={removetoDo}
                key={index}
              />
           </div>
        ))}{" "}
      </div>{" "}
      </div>
    </>
  );
}
