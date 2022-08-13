import { connect } from "react-redux";
import todosActions from "../../redux/todos/todos-actions";
import { SelectButton } from "../Button/Button";
import { AppDispatch, RootState } from "../../redux/store";
import React from "react";

interface ITodoFilterProps {
  value: string;
  onChange: React.ChangeEventHandler;
}

const TodoFilter: React.FC<ITodoFilterProps> = ({ value, onChange }) => (
  <SelectButton onChange={onChange} value={value}>
    <option value="all">All</option>
    <option value="incomplete">Incomplete</option>
    <option value="complete">Completed</option>
  </SelectButton>
);

const mapStateToProps = (state: RootState) => ({
  value: state.todos.filter,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(todosActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
