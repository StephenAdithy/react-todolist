import React, { useState } from "react";

const crudop = () => {
  const [data, setData] = useState([
    { id: 1, name: "Bally", email: "bally@gmail.com" },
    { id: 2, name: "John", email: "john@gmail.com" },
    { id: 3, name: "Doe", email: "doe@gmail.com" },
  ]);
  const [name, setName] = useState("");
  const [editname, setEditname] = useState(true);
  const [editid, setEditid] = useState(null);

  const handleEditBtn = (id) => {
    setEditname(false);
    setEditid(id);
    const editdata = data.find((item) => item.id === id);
    setName(editdata.name);
  };

  const handleDelete = (id) => {
    const newdata = data
      .filter((item) => item.id !== id)
      .map((item, index) => {
        return { ...item, id: index + 1 };
      });
    setData(newdata);
  };

  const handleAddingSave = () => {
    if (!editname) {
        const updateddata = data.map((item) => {
            return item.id === editid ? {...item,name:name,email:`${name.toLowerCase()}@gmail.com`}:item
        })
        setData(updateddata)
        setEditname(true)
        setName("")
    } else {
      const newEntry = {
        id: data.length + 1,
        name: name,
        email: `${name.toLowerCase()}@gmail.com`,
      };
      setData([...data, newEntry]);
      setName("");
    }
  };

  return (
    <section className="crudop-section">
      <h1 className="crudop-section-header">CRUD Operations</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button className="btn add" onClick={handleAddingSave}>
          {editname ? "Add" : "Save"}
        </button>
      </div>
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.name} - {item.email}
              <button
                className="btn edit"
                onClick={() => handleEditBtn(item.id)}
              >
                edit
              </button>
              <button
                className="btn delete"
                onClick={() => handleDelete(item.id)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default crudop;
