import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import { useContext } from "react";
import Dummy from "./components/dummy";
import Crudop from "./components/crudop";

export const addingcontext = createContext();

function App() {

  const [stud, setStud] = useState({
    name: "bally",
    age: 21,
    email: "bally21@gmail.com",
  });

  return (
    <addingcontext.Provider value={{stud}}>
      <Header />
      <Crudop/>
      <Footer />
    </addingcontext.Provider>
     
  );
}

export default App;
