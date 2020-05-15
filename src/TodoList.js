import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    if (todos.length) {
        return (
            <Paper>
                <List>
                {todos.map((todo, i) => (
                    <>
                        <Todo
                            {...todo} // shorter syntaxt to pass down 'id', 'completed', and 'task'
                            key={todo.id}                    
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                        />
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