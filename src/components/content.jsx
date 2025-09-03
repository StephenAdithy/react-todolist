import React, { useState } from "react";
import Passingdata from "./passingdata";

const content = (props) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({ name: "Adithya", age: 21 });

  console.log(data);

  function addition() {
    // setCount(count + 1);
    setCount((num) => {
      return num + 1;
    });
  }

  console.log(props.user);

  function handleClick() {
    console.log("Button Clicked");
  }
  function handleClick1(e) {
    console.log(e.target.innerText);
  }

  return (
    <>
      <div>My name is {props.user}</div>
      <div>Count is {count}</div>
      <button className="btn-primary" onClick={addition}>
        Click Me
      </button>
      <button
        className="btn-primary"
        onClick={(e) => {
          handleClick1(e);
        }}
      >
        Click Me
      </button>

      <Passingdata data={data} />
    </>
  );
};

export default content;
