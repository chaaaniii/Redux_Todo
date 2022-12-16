import React from "react";
import Header from "../components/Header";
import Todoform from "../components/Todoform";
import ToDolist from "../components/Todolist";

function Home() {
  return (
    <>
      <Header />
      <Todoform />
      <ToDolist />
    </>
  );
}

export default Home;
