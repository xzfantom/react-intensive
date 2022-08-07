import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { addTodos } from "../../redux/reducer";
import s from './Todos.module.css'


const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })


  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  return (
    <div className={s.todoForm}>
      <input
        className={s.todoInput}
        type='text'
        onChange={(e) => handleChange(e)}
        placeholder='Add a todo'
        value={todo}
        ref={inputRef}
      />
      <button onClick={() => add()} className={s.todoButton}>
        Add todo
      </button>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
