import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_CHECKBOX, UPDATE_TODO } from "../todoApp/actions";

const initialState: Array<string>=[
    // {id: 1, todo: 'Buy Laptop', completed: false},
    // {id: 2, todo: 'Master Redux', completed: false},
    // {id: 3, todo: 'Watering Plants', completed: true},
];



export const operationsReducer=(state=initialState, action: { type: string; payload: any; })=>{

    interface item {
        completed: boolean
        id: number
        
      }

    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_ALL:
            return [];
        case REMOVE_TODO:
            const filteredTodos = state.filter((todo)=>todo.id!==action.payload);
            return filteredTodos;
        case UPDATE_TODO:
            let data = action.payload;
            const updatedArray: any[]=[];
            state.map((item)=>{
                if(item.id===data.id){
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed;
                }
                updatedArray.push(item);
            })
            return updatedArray;
        case UPDATE_CHECKBOX:
            let todoArray: any[]=[];
            state.map((item)=>{
                if(item.id===action.payload){
                    item.completed = !item.completed;
                }
                todoArray.push(item);
            })
            return todoArray;
        default: return state;
    }
}