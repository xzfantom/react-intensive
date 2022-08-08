import { ADD_TODO, EDIT_TODO, DELETE_TODO,CHANGE_COMPLETED, ADD_LOGIN, CHANGE_SELECTED_TODOS } from '../actionsTypes'

const initialState = {
    todos: [],
    name: "",
    isLogin: false,
    selectedTodos: "all"
}
export const todosReducer = ( state = initialState, action ) => {
    const newTodo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
    }
    switch ( action.type ){
        case ADD_TODO:
            return {
                ...state,
                todos: [ ...state.todos, newTodo ]
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(( todo ) => {
                    if( todo.id === action.payload.id ) {
                        return {...todo, title: action.payload.title}
                    }
                    return todo
                }),
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(( todo ) => todo.id !== action.payload)
            };
        case CHANGE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map(( todo ) => {
                    if( todo.id === action.payload ) {
                        return {...todo, completed: !todo.completed}
                    }
                    return todo
                }),
            };
        case ADD_LOGIN:
            return{
                ...state,
                name: action.payload,
                isLogin: true
            };
        case CHANGE_SELECTED_TODOS:
            return{
                ...state,
                selectedTodos: action.payload,
            };
        default:
            return state;
    }
}