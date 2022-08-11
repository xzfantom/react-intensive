import reducer, { addTodo, deleteTodo, editTodo, TodoState } from './todoSlice';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({todos: []});
});

test('should handle a todo being added to an empty list', () => {
  const previousState: TodoState = {todos: []};

  expect(reducer(previousState, addTodo({id: 213123, title: 'asdasd'}))).toEqual({todos: [
    { id: 213123, title: 'asdasd' }
  ]});
});

test('should handle a todo being added to an existing list', () => {
  const previousState: TodoState = {todos: [{id: 111, title: 'test'}]};

  expect(reducer(previousState, addTodo({id: 3333, title: 'test3'}))).toEqual(
    {todos: [{id: 111, title: 'test'}, {id: 3333, title: 'test3'}]}
  );
});

test('should remove a todo being deleted from empty list', () => {
  const previousState: TodoState = {todos: []};

  expect(reducer(previousState, deleteTodo(213123))).toEqual({todos: []});
});

test('should remove a todo being deleted from existing list', () => {
  const previousState: TodoState = {todos: [{id: 111, title: 'test'}]};

  expect(reducer(previousState, deleteTodo(111))).toEqual({todos: []});
});

test('should handle a todo being edited in empty list', () => {
  const previousState: TodoState = {todos: []};

  expect(reducer(previousState, editTodo({id: 213123, title: 'asdasd'}))).toEqual({todos: []});
});

test('should handle a todo being edited in existing list', () => {
  const previousState: TodoState = {todos: [{id: 111, title: 'test'}]};

  expect(reducer(previousState, editTodo({id: 111, title: 'test3'}))).toEqual(
    {todos: [{id: 111, title: 'test3'}]}
  );
});