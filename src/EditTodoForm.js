import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { TodoContext } from './contexts/todos.context';

function EditTodoForm({ id, task, editToggleForm }) {
    const [value, handleChange, reset] = useInputState(task);
    const { editTodo  } = useContext(TodoContext);
    return (
        <form onSubmit={(e) => {
                e.preventDefault();
                editTodo(id, value);
                reset();
                editToggleForm();
            }}
            style={{ marginLeft: "1rem"}}
        >
            <TextField 
                margin="normal"
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
            <ListItemSecondaryAction>
                <IconButton aria-label="Cancel" onClick={() => {
                    editToggleForm();
                }}>
                    <CloseIcon></CloseIcon>
                </IconButton>
            </ListItemSecondaryAction>
        </form>
    )
}

export default EditTodoForm;