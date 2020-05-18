import useLocalStorageState from './useLocalStorageState';
import { v4 as uuidv4 } from 'uuid';

export default initalValue => {
    const [todos, setTodos] = useLocalStorageState("todos", initalValue);
    return {
        todos,
        addTodo: newTodoText => {
            const idNum = uuidv4();
            setTodos([...todos, {key:idNum, id: idNum, task: newTodoText, completed: false}]);
        },
        removeTodo: todoId => {
            // filter out removed todo
            const updatedTodos = todos.filter(todo => todo.id !== todoId);
            // call setTodos with new todos array
            setTodos(updatedTodos);
        },
        toggleTodo: todoId => {
            const updatedTodos = todos.map(todo => 
                todo.id === todoId ? {...todo, completed: !todo.completed} : todo
            );
            setTodos(updatedTodos);
        },
        editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map(todo => 
                todo.id === todoId ? {...todo, task: newTask } : todo
            );
            setTodos(updatedTodos);
        }
    }
}