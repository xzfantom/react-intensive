import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../redux/reducers/todosReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector