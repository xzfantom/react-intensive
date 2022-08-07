import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MyButton from "../MyButton/MyButton";
import s from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../../store/userSlicer";
import Login from "../Login/Login";
import { getUser } from "../../store/selectors";
import TotalCompleteItems from "../TotalCompleteItems/TotalCompletelItems";
import Form from "../Form/Form";
import { addUsers } from "../../store/userNameSlicer";


const Navbar = (props) => {
  const [modal, setModal] = useState(false);
  const showModal = () => setModal(!modal);
  const closeModal = () => setModal(null);
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const value = useSelector(addUsers);

  const logInAction = () => {
    dispatch(logIn());
  };

  const logOutAction = () => {
    setModal(null);
    dispatch(logOut());
  };
  return (
    <div className={s.navbar}>
      <TotalCompleteItems />

      {user ? (
          <>
            <h2 className={s.activeTodo} >TODO APP</h2>
            <NavLink to='/'>
          <MyButton
            onClick={() => {
              logOutAction();
            }}
          >
            {value.payload.userName.slice(-1)}
          </MyButton>
          </NavLink>

          </>
      ) : (

        <>
          <h2>TODO APP</h2>
        <NavLink  to='/main'>
          <MyButton onClick={() => showModal()}>LOG IN</MyButton>

          <Login
            className={s.modal}
            show={modal}
            close={showModal}
            title="LOGIN"
          >
            <Form
              logIn={() => {
                logInAction();
              }}
              close={closeModal}
            />
          </Login>
        </NavLink>
        </>
      )}
    </div>
  );
};

export default Navbar;