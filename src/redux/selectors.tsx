import {useTypedSelector} from "../hooks/useTypedSelector";

export const STATE = () => {
    const activeTodosCount = useTypedSelector((state) => state.todos.filter((todo) => todo.completed === false).length);
    const userName = useTypedSelector((state) => state.name );
    const isLogin = useTypedSelector((state) => state.isLogin );
    const selectedTodosList = useTypedSelector((state) => state.selectedTodos);
    const todos = useTypedSelector((state) =>
        (selectedTodosList === "active") ? state.todos.filter((todo) => todo.completed === false)
        : (selectedTodosList === "inactive") ? state.todos.filter((todo) => todo.completed === true)
        :  state.todos
    );
    return {activeTodosCount, userName, isLogin, selectedTodosList, todos}
};