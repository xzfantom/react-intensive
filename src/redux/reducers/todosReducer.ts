import {TodosActionTypes} from '../../types/actionsTypes'
import {TodosActions} from "../../types/actions";
import {ITodo} from "../../types/types";

interface TodosState {
    todos: any[],
    name: string,
    isLogin: boolean,
    selectedTodos: string
}

const initialState: TodosState = {
    todos: [],
    name: "",
    isLogin: false,
    selectedTodos: "all"
}
export const todosReducer = (state = initialState, action : TodosActions): TodosState => {
    const newTodo : ITodo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
    }
    switch (action.type){
        case TodosActionTypes.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        case TodosActionTypes.EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if(todo.id === action.payload.id) {
                        return {...todo, title: action.payload.title}
                    }
                    return todo
                }),
            };
        case TodosActionTypes.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            };
        case TodosActionTypes.CHANGE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if(todo.id === action.payload) {
                        return {...todo, completed: !todo.completed}
                    }
                    return todo
                }),
            };
        case TodosActionTypes.ADD_LOGIN:
            return{
                ...state,
                name: action.payload,
                isLogin: true
            };
        case TodosActionTypes.CHANGE_SELECTED_TODOS:
            return{
                ...state,
                selectedTodos: action.payload,
            };
        default:
            return state;
    }
}

export type RootState = ReturnType<typeof todosReducer>