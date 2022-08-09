import { useState, FC} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./registrationPage.module.css";
import { setUser } from "../../store/actions";
import Button from "../../components/Button/Button";

const RegistrationPage: FC = () => {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitClick: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ): void => {
    e.preventDefault();

    if (userName.trim()) {
      setError(false);
      dispatch(setUser(userName));
      navigate("/toDoList", { replace: true });
    } else {
      setError(true);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <form className={style.form}>
          <label className={style.label} htmlFor="regInput">
            Enter your name
          </label>
          <input
            className={style.input}
            id="regInput"
            placeholder="Name"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {error && (
            <div className={style.error}>This field can't be empty</div>
          )}
        </form>
        <div className={style.button}>
          <Button handleClick={handleSubmitClick} text={"Save"} />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
