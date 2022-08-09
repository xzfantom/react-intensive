import { TodosActionTypes } from "./actionsTypes";

export interface newTodo {
    id: number,
    title: string,
    completed: false,
}
interface AddTodoAction {
    type: TodosActionTypes.ADD_TODO,
    payload: newTodo
}
interface EditTodoAction {
    type: TodosActionTypes.EDIT_TODO,
    payload: any
}
interface DeleteTodoAction {
    type: TodosActionTypes.DELETE_TODO,
    payload: number
}
interface AddLoginAction {
    type: TodosActionTypes.ADD_LOGIN,
    payload: string
}
interface ChangeCompletedAction {
    type: TodosActionTypes.CHANGE_COMPLETED,
    payload: number
}
interface ChangeSelectedAction {
    type: TodosActionTypes.CHANGE_SELECTED_TODOS,
    payload: string
}
export type TodosActions =
    AddTodoAction
    | EditTodoAction
    | DeleteTodoAction
    | AddLoginAction
    | ChangeCompletedAction
    | ChangeSelectedAction