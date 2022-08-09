import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "./../actions/index";

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};

export default useActions;
