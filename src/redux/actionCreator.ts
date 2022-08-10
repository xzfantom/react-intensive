import {TodosActionTypes} from "../types/actionsTypes";

export const AddTodoAction = (valueTodo: string) => {
    return {
        type: TodosActionTypes.ADD_TODO,
        payload: valueTodo
    }
}
export const EditTodoAction = (id:number, valueTodo: string) => {
    return {
        type: TodosActionTypes.EDIT_TODO,
        payload: {
            id: id,
            title: valueTodo
        }
    }
}
export const DeleteTodoAction = (id:number) => {
    return {
        type: TodosActionTypes.DELETE_TODO,
        payload: id
    }
}
export const AddLoginAction = (name:string) => {
    return {
        type: TodosActionTypes.ADD_LOGIN,
        payload: name
    }
}
export const ChangeCompletedAction = (id:number) => {
    return {
        type: TodosActionTypes.CHANGE_COMPLETED,
        payload: id
    }
}
export const ChangeSelectedAction = (name:string) => {
    return {
        type: TodosActionTypes.CHANGE_SELECTED_TODOS,
        payload: name
    }
}