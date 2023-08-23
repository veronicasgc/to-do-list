import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';


const Transition = React.forwardRef(function Transition(props,ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTodo({open, handleCloseEdit, todo, editTodo}) {

    const [editText, setEditText] = React.useState(todo.text)
const textHandler = () =>{
    editTodo(todo.id, editText)
    handleCloseEdit()

    }


  return (
  
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseEdit}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle>{"Edit"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">

         <TextField defaultValue={todo.text} 
         fullWidth
         onChange={(e)=>setEditText(e.target.value)}
         />

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancelar</Button>
          <Button onClick={textHandler}>Ok</Button>
        </DialogActions>
      </Dialog>
 
  );
}
