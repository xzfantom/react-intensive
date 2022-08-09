const { todoReducer } = require('./src/store/todoSlice');
const {
  changeUserName,
  // addTodo,
  // patchTodoText,
  // deleteTodo,
  // changeTaskStatus,
} = require('./src/store/todoSlice');

let initialState;
beforeEach(() => {
  initialState = {
    todos: {
      1: { id: 1, isCompleted: false, text: 'merrry Christmas' },
      2: { id: 5, isCompleted: false, text: 'happy New Year' },
      3: { id: 9, isCompleted: true, text: 'happy Easter' },
    },
    userName: 'Nobody',
  };
  return initialState;
});

test('changeUserName', () =>
  expect(todoReducer(initialState, changeUserName('Masha'))).toEqual({
    todos: {
      1: { id: 1, isCompleted: false, text: 'merrry Christmas' },
      2: { id: 5, isCompleted: false, text: 'happy New Year' },
      3: { id: 9, isCompleted: true, text: 'happy Easter' },
    },
    userName: 'Masha',
  }));
