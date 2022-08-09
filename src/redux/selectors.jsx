import { useSelector } from "react-redux";

export const STATE = () => {
    const activeTodosCount = useSelector( state => state.todos.filter(( todo ) => todo.completed === false).length );
    const userName = useSelector( state => state.name );
    const isLogin = useSelector( state => state.isLogin );
    const selectedTodosList = useSelector( state => state.selectedTodos);
    const todos = useSelector(( state ) =>
        ( selectedTodosList === "active" ) ? state.todos.filter(( todo ) => todo.completed === false)
        : ( selectedTodosList === "inactive" ) ? state.todos.filter(( todo ) => todo.completed === true)
        :  state.todos
    );
    return { activeTodosCount, userName, isLogin, selectedTodosList, todos }
};