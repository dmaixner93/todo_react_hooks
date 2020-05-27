import React, { createContext } from 'react';
import todoReducer from '../reducers/todo.reducer';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer'

const defaultTodos = [
    { id: 1, task: "Mow the lawn using goats", completed: false },
    { id: 2, task: "Release lady bugs into garden", completed: false }
];

export const TodoContext = createContext();
export const  DispatchContext = createContext();

export function TodoProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer);
    return (
        // todos is defaultTodos
        <TodoContext.Provider value={todos}>
            {/** dispatch is todoReducer() */}
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodoContext.Provider>
    );
}