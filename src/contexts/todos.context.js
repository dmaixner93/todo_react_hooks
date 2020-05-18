import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
    { key: 1, id: 1, task: "Mow the lawn using goats", completed: false },
    { key: 2, id: 2, task: "Release lady bugs into garden", completed: false }
];

export const TodoContext = createContext();

export function TodoProvider(props) {
    /** function from useTodoState is returning ALL the functions in an object.
     * This allows us to also pass the returned object from useTodoState into
     * useState(), instead of calling - const { todo,addTodo, removeTodo... } below.
     */
    const todoStuff = useTodoState(defaultTodos);
    return (
        <TodoContext.Provider value={todoStuff}>
            {props.children}
        </TodoContext.Provider>
    );
}