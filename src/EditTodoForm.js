import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function EditTodoForm( { id, task, editTodo, editToggleForm } ) {
    const [value, handleChange, reset] = useInputState(task);
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