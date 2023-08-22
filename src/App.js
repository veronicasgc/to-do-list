import React from "react";
import "./App.css";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import { Container, List } from "@mui/material";

function App() {
  return (
    <Container maxWidth="xs" style={{marginTop: "1em"}}>
      <Form />
      <List  sx={{bgcolor: 'background.paper', marginTop: "1em" }}>
      <TodoItem />
      </List>

    </Container>
  );
}

export default App;
