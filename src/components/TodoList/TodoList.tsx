import { connect } from "react-redux";
import Todo from "../Todo";
import todosActions from "../../redux/todos/todos-actions";
import styles from "./TodoList.module.css";
import { RootState, AppDispatch } from "../../redux/store";
import { TodoType } from "../../redux/types/todoType";

interface ITodoList {
  todos: TodoType[];
  onDeleteTodo: Function;
  onToggleCompleted: Function;
  onEditTodo: Function;
}

const TodoList: React.FC<ITodoList> = ({
  todos,
  onDeleteTodo,
  onToggleCompleted,
}) => {
  return (
    <ul className={styles.todoList}>
      {todos.map(({ id, text, completed }) => {
        let style = "";
        if (completed) {
          style = "--completed";
        }
        return (
          <li
            key={id}
            className={`${styles.todoList__item} ${styles.todoList__item}${style}`}
          >
            <Todo
              text={text}
              completed={completed}
              id={id}
              onToggleCompleted={() => onToggleCompleted(id)}
              onDelete={() => onDeleteTodo(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

const getVisibleTodos = (allTodos: TodoType[], filter: string) => {
  switch (filter) {
    case "incomplete":
      return allTodos.filter((todo) => !todo.completed);
    case "complete":
      return allTodos.filter((todo) => todo.completed);
    default:
      return allTodos;
  }
};

const mapStateToProps = (state: RootState) => ({
  todos: getVisibleTodos(state.todos.items, state.todos.filter),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onDeleteTodo: (id: number) => dispatch(todosActions.deleteTodo(id)),
  onToggleCompleted: (id: number) => dispatch(todosActions.toggleCompleted(id)),
  onEditTodo: (id: number) => dispatch(todosActions.editTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
