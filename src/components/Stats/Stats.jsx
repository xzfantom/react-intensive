import React from "react";
import { connect } from "react-redux";
import styles from "./Stats.module.css";

const Stats = ({ total, completed, incompleted }) => (
  <div className={styles.stats}>
    <p className={styles.stats__item}>
      <span className={styles.stats__value}>{total}</span>
      <span className={styles.stats__label}>Total</span>
    </p>
    <p className={styles.stats__item}>
      <span className={styles.stats__value}>{completed}</span>
      <span className={styles.stats__label}>Completed</span>
    </p>
    <p className={styles.stats__item}>
      <span className={styles.stats__value}>{incompleted}</span>
      <span className={styles.stats__label}>Incompleted</span>
    </p>
  </div>
);

const getCompeltedTodosCount = (todos) =>
  todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);

const getIncompeltedTodosCount = (todos) =>
  todos.reduce((total, todo) => (!todo.completed ? total + 1 : total), 0);

const mapStateToProps = (state) => ({
  total: state.todos.items.length,
  completed: getCompeltedTodosCount(state.todos.items),
  incompleted: getIncompeltedTodosCount(state.todos.items),
});

export default connect(mapStateToProps)(Stats);
