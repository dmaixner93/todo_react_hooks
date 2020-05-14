import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

function TodoItem({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggleState();
    return (
        <ListItem style={{ height: "64px" }}>
            { isEditing ? ( 
                <div>
                    <EditTodoForm 
                        editTodo={editTodo}
                        id={id}
                        task={task}
                        editToggleForm={toggle}
                    />
                </div>
            ) : (
            <>
            <CheckBox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
            <ListItemText 
                style={{
                    textDecoration: completed ? "line-through" : "none"
                }}>{task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                    <DeleteIcon></DeleteIcon>
                </IconButton>
                <IconButton aria-label="Edit" onClick={() => toggle()}>
                    <EditIcon></EditIcon>
                </IconButton>
            </ListItemSecondaryAction>
            </>
            )}
        </ListItem>
    )
}

export default TodoItem;