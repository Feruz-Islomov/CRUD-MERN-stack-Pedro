import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Axios from "axios";

const Mymern = () => {
  const [foodName, setFoodName] = useState("");
  const [days, setDays] = useState(0);
  const [foodlist, setFoodlist] = useState([]);

  const [newName, setNewName] = useState("");

  const addtoList = () => {
    Axios.post("http://localhost:3001/insert", {
      foodName: foodName,
      days: days,
    });
  };
  useEffect(() => {
    Axios.get("http://localhost:3001/read")
      .then((res) => setFoodlist(res.data))
      .catch((err) => console.log(err));
  });

  const updateName = (id) => {
    Axios.put("http://localhost:3001/update", { id: id, newName: newName });
  };
  const getToDelete = (id) => {
    console.log(id);
    Axios.delete(`http://localhost:3001/delete/${id}`);
  };
  const history = useHistory();
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   if (userInfo) {
  //     history.push("/mern");
  //   }
  // }, [history]);
  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("userInfo");
          history.push("/login");
        }}
      >
        Log out
      </button>
      <h2>MERN CRUD</h2>
      <label>Food Name:</label>
      <input type="text" onChange={(e) => setFoodName(e.target.value)} />
      <label>Day I ate:</label>
      <input type="number" onChange={(e) => setDays(e.target.value)} />
      <button onClick={addtoList}>Add to list</button>
      <hr />
      <h1>Food List</h1>
      {foodlist.map((val, key) => {
        return (
          <div className="list" key={key}>
            <h1>{val.foodName}</h1> <h1>{val.day}</h1>
            <input
              type="text"
              placeholder="update..."
              onChange={(e) => setNewName(e.target.value)}
            />
            <button onClick={() => updateName(val._id)}>update</button>
            <button onClick={() => getToDelete(val._id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Mymern;
