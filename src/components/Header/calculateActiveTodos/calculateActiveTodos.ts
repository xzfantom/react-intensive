import { Todo } from '../../../store/reducers/todoReducer'

const calculateActiveTodos = (todos: Todo[]) =>
todos.reduce((prev, curr) => prev + +!curr.isDone, 0);

export default calculateActiveTodos