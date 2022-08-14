import { todoReducer } from "./src/redux/todoReducer";
import {ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO} from './src/types';


const initialState = {
  todoList: [
    {id: 1, title: 'first title', isDone: true},
    {id: 2, title: 'second title', isDone: false},
    {id: 3, title: 'third title', isDone: false},
  ]
}

describe('Todo Reducer', () => { 

  test('add new to do', () => {
    expect(todoReducer(initialState, {type: ADD_TODO, payload: {id: 4, title: 'some new title', isDone: false}})).toEqual({
      todoList: [
        {id: 1, title: 'first title', isDone: true},
        {id: 2, title: 'second title', isDone: false},
        {id: 3, title: 'third title', isDone: false},
        {id: 4, title: 'some new title', isDone: false}
      ]
    })
  })

  test('toggle completed status of todo', () => {
    expect(todoReducer(initialState, {type: TOGGLE_TODO, payload: 2})).toEqual({
      todoList: [
        {id: 1, title: 'first title', isDone: true},
        {id: 2, title: 'second title', isDone: true},
        {id: 3, title: 'third title', isDone: false},
      ]
    })
  })

  test('delete to do', () => {
    expect(todoReducer(initialState, {type: DELETE_TODO, payload: 3})).toEqual({
      todoList: [
        {id: 1, title: 'first title', isDone: true},
        {id: 2, title: 'second title', isDone: false},
      ]
    })
  })

  test('edit to do content', () => {
    expect(todoReducer(initialState, {type: EDIT_TODO, payload: {id: 3, title: 'updated third title'}})).toEqual({
      todoList: [
        {id: 1, title: 'first title', isDone: true},
        {id: 2, title: 'second title', isDone: false},
        {id: 3, title: 'updated third title', isDone: false},
      ]
    })
  })

 })