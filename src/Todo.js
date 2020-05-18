import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { TodoContext } from './contexts/todos.context';

function Todo({ id, task, completed }) {
    const { dispatch } = useContext(TodoContext);
    const [isEditing, toggle] = useToggleState();
    return (
        <ListItem style={{ height: "64px" }}>
            { isEditing ? ( 
                <div>
                    <EditTodoForm 
                        id={id}
                        task={task}
                        editToggleForm={toggle}
                    />
                </div>
            ) : (
            <>
            <CheckBox 
                tabIndex={-1} 
                checked={completed} 
                onClick={() => dispatch({ type: "TOGGLE", id: id})} 
            />
            <ListItemText 
                style={{
                    textDecoration: completed ? "line-through" : "none"
                }}>{task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton 
                    aria-label="Delete" 
                    onClick={() => dispatch({ type: "REMOVE", id: id})}
                >
                    <DeleteIcon></DeleteIcon>
                </IconButton>
                <IconButton 
                    aria-label="Edit" 
                    onClick={() => toggle()}
                >
                    <EditIcon></EditIcon>
                </IconButton>
            </ListItemSecondaryAction>
            </>
            )}
        </ListItem>
    )
}

export default Todo;