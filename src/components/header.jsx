import React, { useContext } from "react";
import { addingcontext } from "../App";

const header = () => {
  let { stud } = useContext(addingcontext);
  return (
    <div>
      <h1 className="header-title">Header is {stud.name} ToSuDo Application</h1>
      <div>
        <p className="header-para">Create application create & Read & Update & Delete</p>
      </div>
    </div>
  );
};

export default header;
