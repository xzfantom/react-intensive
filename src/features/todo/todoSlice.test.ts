import reducer, { todoAdded, todoToggled, todoChanged, todoRemoved } from './todoSlice';

test('должен вернуть начальное состояние', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({todos: [], activeCount: 0, })
})

test('должен добавить новую задачу', () => {
  const previousState = {todos: [], activeCount: 0,};
  expect(reducer(previousState, todoAdded({data:'data', id:0, done:false}))).toMatchObject({activeCount: 1, todos:[{data:'data', done:false}]});
})

test('должен переключить задачу', () => {
  const previousState = {activeCount: 1, todos:[{data:'data', id: 1, done:false}]};
  expect(reducer(previousState, todoToggled(1))).toMatchObject({activeCount: 0, todos:[{data:'data', id:1, done:true}]});
})

test('должен изменить текст задачи', () => {
  const previousState = {activeCount: 1, todos:[{data:'data', id: 1, done:false}]};
  expect(reducer(previousState, todoChanged({data:'new data', id: 1, done:false})))
    .toMatchObject({activeCount: 1, todos:[{data:'new data', id:1, done:false}]});
})

test('должен удалить задачу', () => {
  const previousState = {activeCount: 1, todos:[{data:'data', id: 1, done:false}]};
  expect(reducer(previousState, todoRemoved(1))).toEqual({todos: [], activeCount: 0, })
})