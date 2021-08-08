// import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
// import { response } from "express";

function App() {
  const [foodName, setFoodName] = useState("");
  const [days, setdays] = useState(0);

  const [newFoodName, setnewFoodName] = useState("");

  const [foodList, setfoodList] = useState([]);
  const addToList = () => {
    // console.log(foodName, days);
    Axios.post("http://localhost:3001/insert", {
      foodName: foodName,
      days: days,
    });
  };
  const updateFood = (id) => {
    // console.log(foodName, days);
    // console.log(id);
    console.log(newFoodName);
    Axios.put("http://localhost:3001/update", {
      id: id,
      newFoodName: newFoodName,
    });
  };
  const deleteFood = (id) => {
    // console.log(foodName, days);
    // console.log(id);
    Axios.delete(`http://localhost:3001/delete/${id}`);
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      // console.log(response);
      setfoodList(response.data);
    });
  }, []);
  return (
    <div className="App">
      <h1>CRUD App with MERN</h1>
      <input
        type="text"
        placeholder="Enter food name"
        onChange={(e) => {
          setFoodName(e.target.value);
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

      <h1>Food List</h1>

      {foodList.map((val, key) => {
        return (
          <div key={key} className="food">
            <h1>{val.foodName}</h1>
            <input
              type="text"
              onChange={(e) => {
                setnewFoodName(e.target.value);
              }}
              name=""
              placeholder="New Food Name"
              id=""
            />
            <button onClick={() => updateFood(val._id)}>Update</button>
            <button onClick={() => deleteFood(val._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
