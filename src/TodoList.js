import React, { useContext }  from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';
import { TodoContext } from './contexts/todos.context';

function TodoList() {
    const todos= useContext(TodoContext);
    if (todos.length) {
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => (
                        <>
                            <Todo {...todo} />
                            {i < todos.length - 1 && <Divider />}
                        </>
                    ))}
                </List>
            </Paper>
        )
    } else {
        
        return null;
    
    }

}

export default TodoList;