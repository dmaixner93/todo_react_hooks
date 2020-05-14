import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

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
        </form>
    )
}

export default EditTodoForm;