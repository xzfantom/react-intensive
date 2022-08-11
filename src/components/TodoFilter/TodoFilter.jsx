import React from "react";

import { connect } from "react-redux";
import todosActions from "../../redux/todos/todos-actions";
import { SelectButton } from "../Button/Button";

const TodoFilter = ({ value, onChange }) => (
  <SelectButton onChange={onChange} value={value}>
    <option value="all">All</option>
    <option value="incomplete">Incomplete</option>
    <option value="complete">Completed</option>
  </SelectButton>
);

const mapStateToProps = (state) => ({
  value: state.todos.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(todosActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
