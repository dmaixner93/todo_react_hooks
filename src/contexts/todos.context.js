import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
    { key: 1, id: 1, task: "Mow the lawn using goats", completed: false },
    { key: 2, id: 2, task: "Release lady bugs into garden", completed: false }
];

export const TodoContext = createContext();
export const  DispatchContext = createContext();

export function TodoProvider(props) {
    const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
    return (
        <TodoContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodoContext.Provider>
    );
}