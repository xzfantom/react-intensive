import { State, todoReducer } from './src/store/todoSlice';
import {
  changeUserName,
  addTodo,
  patchTodoText,
  deleteTodo,
  changeTaskStatus,
} from './src/store/todoSlice';

let initialState: State;
beforeEach(() => {
  initialState = {
    todos: {
      1: { id: 1, isCompleted: false, text: 'merrry Christmas' },
      5: { id: 5, isCompleted: false, text: 'happy New Year' },
      9: { id: 9, isCompleted: true, text: 'happy Easter' },
    },
    userName: 'Nobody',
  };
  return initialState;
});

test('changeUserName', () =>
  expect(todoReducer(initialState, changeUserName('Masha'))).toEqual({
    todos: {
      1: { id: 1, isCompleted: false, text: 'merrry Christmas' },
      5: { id: 5, isCompleted: false, text: 'happy New Year' },
      9: { id: 9, isCompleted: true, text: 'happy Easter' },
    },
    userName: 'Masha',
  }));

test('addTodo', () =>
  expect(todoReducer(initialState, addTodo('happy birthday'))).toEqual({
    todos: {
      1: { id: 1, isCompleted: false, text: 'merrry Christmas' },
      5: { id: 5, isCompleted: false, text: 'happy New Year' },
      9: { id: 9, isCompleted: true, text: 'happy Easter' },
      10: { id: 10, isCompleted: false, text: 'happy birthday' },
    },
    userName: 'Nobody',
  }));

test('patchTodoText', () =>
  expect(todoReducer(initialState, patchTodoText({ id: 5, text: 'happy day' }))).toEqual({
    todos: {
      1: { id: 1, isCompleted: false, text: 'merrry Christmas' },
      5: { id: 5, isCompleted: false, text: 'happy day' },
      9: { id: 9, isCompleted: true, text: 'happy Easter' },
    },
    userName: 'Nobody',
  }));

test('changeTaskStatus', () =>
  expect(todoReducer(initialState, changeTaskStatus(9))).toEqual({
    todos: {
      1: { id: 1, isCompleted: false, text: 'merrry Christmas' },
      5: { id: 5, isCompleted: false, text: 'happy New Year' },
      9: { id: 9, isCompleted: false, text: 'happy Easter' },
    },
    userName: 'Nobody',
  }));

test('deleteTodo', () =>
  expect(todoReducer(initialState, deleteTodo(1))).toEqual({
    todos: {
      5: { id: 5, isCompleted: false, text: 'happy New Year' },
      9: { id: 9, isCompleted: true, text: 'happy Easter' },
    },
    userName: 'Nobody',
  }));
