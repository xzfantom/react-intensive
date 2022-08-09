import * as UserActionCreators from "../actions/userActions";
import * as TodoActionCreators from "../actions/todoActions";

const ActionCreators = {
  ...UserActionCreators,
  ...TodoActionCreators,
};

export default ActionCreators;
