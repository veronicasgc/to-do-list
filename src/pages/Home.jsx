import React, { useState } from "react";
import { Container, List } from "@mui/material";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    document.getElementById("outlined-basic").value = null;
  };

  const deleteTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const editTodo = (id, editText) => {
    const todosArray = [...todos]

    
    for(let i in todosArray){
      if(todosArray[i].id){
          todosArray[i].text = editText;
      }
    }
   setTodos(todosArray)
  };
  
  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form addTodo={addTodo} />

      <List sx={{ bgcolor: "background.paper", marginTop: "1em" }}>
        {todos.map((todo) => (
          <div key={todo.id} style={{ marginTop: "1em" }}>
            <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo} />
          </div>
        ))}
      </List>
    </Container>
  );
}
