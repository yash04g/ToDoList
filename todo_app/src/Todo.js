import React from "react";
import {
  List,
  ListItemText,
  ListItem,
  ListItemAvatar,
  Button,
} from "@material-ui/core";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Todo(props) {
  return (
    <div>
      <List className="todo__list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText
            primary={props.text.todo}
            secondary="Deadline Approaching ⏰"
          />
        </ListItem>
        <DeleteForeverIcon
          onClick={(event) =>
            db.collection("todos").doc(props.text.id).delete()
          }
        ></DeleteForeverIcon>
      </List>
    </div>
  );
}

export default Todo;
