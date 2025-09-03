import React, { useState } from "react";

const dummy = () => {
  const [item, setItem] = useState([
    { id: 1, name: "steve" },
    { id: 2, name: "john" },
  ]);

  const [stuff, setStuff] = useState("");
  const [editId, setEditId] = useState(true);

  let handleClick = () => {
    setEditId(!editId);
  };

  return (
    <>
      <div>dummy</div>
      <div>
        <input
          type="text"
          value={stuff}
          placeholder="enter item"
          onChange={(e) => {
            setStuff(e.target.value);
          }}
        />
        <button>{editId ? "Add" : "Save"}</button>
      </div>
      <ul>
        {item.map((item) => {
          return (
            <div>
              <li key={item.id}>{item.name}</li>{" "}
              <button onClick={handleClick}>edit</button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default dummy;
