import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([
    "Take Dog for a Walk",
    "Take the trash out",
  ]);
  const [input, setInput] = useState("");
  // When the app loads we need to listen to the database and fetch new todos as they get added/removed
  // Its a hook and it runs when our app loads

  useEffect(() => {
    // this code here fires when the app loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map((doc) => doc.data()));
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    /*This will fire off when we click the button */
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setTodos([
    //   ...todos,
    //   input,
    // ]); /*We spread the array and input string is appended to the todo list */
    setInput(""); /*Clear up the input after clicking add todo button */
  };
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <form>
        <FormControl>
          <InputLabel>Write a ToDo</InputLabel>
          <Input
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
        </FormControl>
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          onClick={addTodo}
          type="submit"
        >
          Add Todo
        </Button>

        <ul>
          {todos.map((todo) => (
            <Todo text={todo} />
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
