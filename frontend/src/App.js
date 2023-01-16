import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import axios from "axios";
 

import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const date = new Date();

  useEffect(() => {
    axios.get("/api/planner/")
      .then((res) => {
        setTodos(res.data)
      }).catch(() => {
        alert("Something went wrong");
      })
  }, [])


  return (
    <div  style={{backgroundImage:  `url("https://images.cloudflareapps.com/ZAotxLiSkmDIeCENOzgQ_background-3.jpeg")`, height: "100vh"}} >
      <Navbar bg="light" style={{ marginBottom: "20px" }}>
        <Container>
          <Navbar.Brand href="#">
            Trip Planning App
          </Navbar.Brand>
        </Container>
      </Navbar>

      
      <Container>
        <h1 contenteditable="true" style={{color: "blue"}}>
        Trip name
        </h1>
        <h3>Planning before trip</h3>
        <TodoForm todos={todos} setTodos={setTodos} />
        <h3>Planning in trip</h3>
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Container>
    </div>
  );
}

export default App;