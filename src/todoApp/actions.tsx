export const ADD_TODO = 'ADD_TODO';
export const DELETE_ALL = 'DELETE_ALL';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';

export const addTodo=(payload: { id: any; todo: string; completed: boolean; })=>{
    return{
        type: ADD_TODO,
        payload
    }
}

export const deleteAll = () =>{
    return{
        type: DELETE_ALL
    }
}

export const removeTodo = (payload: any)=>{
    return{
        type: REMOVE_TODO,
        payload
    }
}

export const handleEditSubmit = (payload: { id: any; todo: string; completed: boolean; })=>{
    return{
        type: UPDATE_TODO,
        payload
    }
}

export const handleCheckbox = (payload: any)=>{
    return{
        type: UPDATE_CHECKBOX,
        payload
    }
}