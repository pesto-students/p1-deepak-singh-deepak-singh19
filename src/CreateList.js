import { useState } from "react";
import {Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import "./style.css"

export default function CreateList({ addList }) {
    const [value, setValue] = useState("");
  
    const submit = e => {
  
      e.preventDefault();
      if(!value){
          return;
      }
  
      addList(value);
      setValue("");
    };
  
    return (
      <>
      <div className="App inputTask">
          
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />{" "}
        <button onClick={submit}> ADD </button>{" "}
      </div>
      </>
    );
  }