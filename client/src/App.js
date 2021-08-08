// import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [foodName, setfoodName] = useState("");
  const [days, setdays] = useState(0);
  const addToList = () => {
    // console.log(foodName, days);
    Axios.post("http://localhost:3001/insert", {
      foodName: foodName,
      days: days,
    });
  };
  return (
    <div className="App">
      <h1>CRUD App with MERN</h1>
      <input
        type="text"
        placeholder="Enter food name"
        onChange={(e) => {
          setfoodName(e.target.value);
        }}
        name=""
        id=""
      />

      <input
        type="number"
        placeholder="Enter days since food ate"
        name=""
        id=""
        onChange={(e) => {
          setdays(e.target.value);
        }}
      />

      <button onClick={addToList}>ADD to List</button>
    </div>
  );
}

export default App;
