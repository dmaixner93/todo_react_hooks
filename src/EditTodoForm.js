import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { DispatchContext } from './contexts/todos.context';

function EditTodoForm({ id, task, toggleEditForm }) {
    const [value, handleChange, reset] = useInputState(task);
    const dispatch = useContext(DispatchContext);
    return (
        <form onSubmit={(e) => {
                e.preventDefault();
                dispatch({ type: "EDIT", id: id, newTask: value });
                reset();
                toggleEditForm();
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
                    toggleEditForm();
                }}>
                    <CloseIcon></CloseIcon>
                </IconButton>
            </ListItemSecondaryAction>
        </form>
    )
}

export default EditTodoForm;