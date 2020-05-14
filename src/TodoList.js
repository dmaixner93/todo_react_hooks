import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import TodoItem from './TodoItem';

function TodoList( {todos, removeTodo, toggleTodo, editTodo }) {
    return (
        <Paper>
            <List>
            {todos.map((todo, i) => (
                <>
                    <TodoItem
                        id={todo.id}
                        task={todo.task}
                        key={todo.id}
                        completed={todo.completed}
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
}

export default TodoList;