import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../../redux/reducer";
import TodoItem from "../TodoItem/TodoItem";
import s from './DisplayTodos.module.css'


const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className={s.container}>
      <div className={s.btnWrap}>
        <button
          className={s.button}
          type='button'
          onClick={() => setSort('active')}
        >
          active
        </button>
        <button
          className={s.button}
          type='button'
          onClick={() => setSort('completed')}
        >
          completed
        </button>
        <button
          className={s.button}
          type='button'
          onClick={() => setSort('all')}
        >
          all
        </button>
      </div>
      <div>
        <div>
          {props.todos.length > 0 && sort === "active"
            ? props.todos.map((item) => {
              return (
                item.completed === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
            : null}
          {/* COMPLETED */}
          {props.todos.length > 0 && sort === "completed"
            ? props.todos.map((item) => {
              return (
                item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
            : null}
          {/* ALL */}
          {props.todos.length > 0 && sort === "all"
            ? props.todos.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                />
              );
            })
            : null}
        </div>
      </div>
    </div >
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
