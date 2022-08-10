import {TodosActionTypes} from "./actionsTypes";

export interface newTodo {
    id: number,
    title: string,
    completed: false,
}
interface AddTodoActionType {
    type: TodosActionTypes.ADD_TODO,
    payload: string
}
interface EditTodoActionType {
    type: TodosActionTypes.EDIT_TODO,
    payload: any
}
interface DeleteTodoActionType {
    type: TodosActionTypes.DELETE_TODO,
    payload: number
}
interface AddLoginActionType {
    type: TodosActionTypes.ADD_LOGIN,
    payload: string
}
interface ChangeCompletedActionType {
    type: TodosActionTypes.CHANGE_COMPLETED,
    payload: number
}
interface ChangeSelectedActionType {
    type: TodosActionTypes.CHANGE_SELECTED_TODOS,
    payload: "active" | "inactive" | "all"
}
export type TodosActions =
    AddTodoActionType
    | EditTodoActionType
    | DeleteTodoActionType
    | AddLoginActionType
    | ChangeCompletedActionType
    | ChangeSelectedActionType