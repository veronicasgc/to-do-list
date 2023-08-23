import EditTodo from './EditTodo';
import * as React from "react";
import ListItem from '@mui/material/ListItem';
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { Paper } from '@mui/material';


export default function TodoItem({todo, deleteTodo, editTodo}) {
  const {openEdit, setOpenEdit}= React.useState(false)

  const handleCloseEdit = () => {
    setOpenEdit(!openEdit)
  }
 
  return (
    <>
    <EditTodo editTodo={editTodo} open={openEdit} handleCloseEdit={handleCloseEdit}
    todo={todo}/>
    <Paper style={{ padding: "0.5em 0em" }}
 
    >
      <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
              <DeleteIcon />
            </IconButton>
          }
          disablePadding
        >
        <ListItemButton role={undefined} dense>
          <ListItemIcon>
            <Checkbox edge="start" tabIndex={-1} disableRipple />
          </ListItemIcon>
          <ListItemText primary={todo.text} onClick={()=>setOpenEdit(true)}/>

        </ListItemButton>
      </ListItem>
    </Paper>
    </>
  );
}
