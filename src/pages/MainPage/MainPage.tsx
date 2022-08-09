import styles from "./MainPage.module.css";
import NewTodo from "../../components/NewTodo/NewTodo";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Tab from "../../components/Tab/Tab";
import TodoBlock from "../../components/TodoBlock/TodoBlock";
import useTypedSelector from "./../../store/hooks/useTypedSelector";

const MainPage = () => {
  const { todos } = useTypedSelector((state) => state.todo);
  const [isActiveSelected, setIsActiveSelected] = useState(false);

  const toggleIsActiveSelected = () => {
    setIsActiveSelected(!isActiveSelected);
  };

  const selectedTodos = todos.filter(({ isDone }) =>
    isActiveSelected ? isDone : !isDone
  );

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.todos}>
        <NewTodo />
        <Tab
          toggleIsActiveSelected={toggleIsActiveSelected}
          isActiveSelected={isActiveSelected} />
        <TodoBlock selectedTodos={selectedTodos} />
      </div>
    </div>
  );
};

export default MainPage;
