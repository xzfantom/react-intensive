import {TodosActionTypes} from "../types/actionsTypes";
import {todosReducer, TodosState} from "../redux/reducers/todosReducer";

const currentState: TodosState = {
    todos: [
        {id: 1, title: "task", completed: true},
        {id: 2, title: "another task", completed: false},
        {id: 3, title: "one more task", completed: true},
    ],
    name: "",
    isLogin: false,
    selectedTodos: "all"
}
describe("validateTodos", ()=>{
    test("add todo", ()=>{
        expect(todosReducer(currentState,{type: TodosActionTypes.ADD_TODO, payload: "and one more task also"})).toEqual({
            todos: [
                {id: 1, title: "task", completed: true},
                {id: 2, title: "another task", completed: false},
                {id: 3, title: "one more task", completed: true},
                {id: Math.floor(Date.now()/100), title: "and one more task also", completed: false},
            ],
            name: "",
            isLogin: false,
            selectedTodos: "all"
        })
    })
    test("edit todo", ()=>{
        expect(todosReducer(currentState,{type: TodosActionTypes.EDIT_TODO, payload: {
                id: 2,
                title: "another task here",
                completed: false,
            } })).toEqual({
            todos: [
                {id: 1, title: "task", completed: true},
                {id: 2, title: "another task here", completed: false},
                {id: 3, title: "one more task", completed: true},
            ],
            name: "",
            isLogin: false,
            selectedTodos: "all"
            }
        )
    })
    test("delete todo", ()=>{
        expect(todosReducer(currentState,{type: TodosActionTypes.DELETE_TODO, payload: 2})).toEqual({
                todos: [
                    {id: 1, title: "task", completed: true},
                    {id: 3, title: "one more task", completed: true},
                ],
                name: "",
                isLogin: false,
                selectedTodos: "all"
            }
        )
    })
    test("change the completeness of the todo", ()=>{
        expect(todosReducer(currentState,{type: TodosActionTypes.CHANGE_COMPLETED, payload: 1})).toEqual({
                todos: [
                    {id: 1, title: "task", completed: false},
                    {id: 2, title: "another task", completed: false},
                    {id: 3, title: "one more task", completed: true},
                ],
                name: "",
                isLogin: false,
                selectedTodos: "all"
            }
        )
    })

    test("login", ()=>{
        expect(todosReducer(currentState,{type: TodosActionTypes.ADD_LOGIN, payload: "user name"})).toEqual({
                todos: [
                    {id: 1, title: "task", completed: true},
                    {id: 2, title: "another task", completed: false},
                    {id: 3, title: "one more task", completed: true},
                ],
                name: "user name",
                isLogin: true,
                selectedTodos: "all"
            }
        )
    })
    test("change selected list of todos", ()=>{
        expect(todosReducer(currentState,{type: TodosActionTypes.CHANGE_SELECTED_TODOS, payload: "active"})).toEqual({
                todos: [
                    {id: 1, title: "task", completed: true},
                    {id: 2, title: "another task", completed: false},
                    {id: 3, title: "one more task", completed: true},
                ],
                name: "",
                isLogin: false,
                selectedTodos: "active"
            }
        )
    })

})
