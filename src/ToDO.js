import {Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css"
export default function ToDO({task, index, markComplete, removetoDo}) {

    console.log(task.title);
  return (
    <>

    <div className="List">
        <div className="LItem ListA">
        <span style={{ textDecoration: task.completed ? "line-through" : " " }}>
        {task.title}
      </span>
        </div>
        
        <div className="LButton ListA">
        <Button variant="outline-success" onClick={() => markComplete(index)}>
        {" "}
        Done{" "}
      </Button>{" "}
      <Button variant="outline-danger" onClick={() => removetoDo(index)}>
        {" "}
        Remove{" "}
      </Button>{" "}
        </div>
   
    </div>
      
    </>
  );
  }