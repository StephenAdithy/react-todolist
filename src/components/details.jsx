import React from "react";
import { useContext } from "react";
import { addingcontext } from "../App";

const details = (props) => {
  const { stud } = useContext(addingcontext);
  console.log(stud);
  return (
    <>
      <div>
        My lastname is {stud.name} and my age is {stud.age} my mail id is
        {stud.email}
      </div>
    </>
  );
};

export default details;
