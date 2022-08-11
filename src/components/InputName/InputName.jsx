import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import userActions from "../../redux/user/user-actions";
import styles from "./InputName.module.css";

const InputName = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length === 0) {
      alert("Please enter your name");
      return;
    }
    onSubmit(name);
    history.push("/todos");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles["input-field"]}>
        <label htmlFor="user">Please enter your name</label>
        <input id="user" type="text" value={name} onChange={handleChange} />
      </div>
      <button className={styles.btn} type="submit">
        Go to your Todos
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (abc) => dispatch(userActions.login(abc)),
});

export default connect(null, mapDispatchToProps)(InputName);
