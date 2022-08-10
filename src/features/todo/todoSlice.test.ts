import reducer, { todoAdded, todoToggled, todoChanged, todoRemoved } from './todoSlice';

const INITIAL_STATE = {todos: [], activeCount: 0, };

test('должен вернуть начальное состояние', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({...INITIAL_STATE })
})

test('должен добавить новую задачу', () => {
  const previousState = {...INITIAL_STATE};
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
  expect(reducer(previousState, todoRemoved(1))).toEqual({...INITIAL_STATE })
})