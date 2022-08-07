import React, { useState } from 'react';
import s from './StylesForm.module.css';
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";

import {connect} from "react-redux";
import {addUsers} from "../../store/userNameSlicer";

const mapStateToProps = (state)=>{
    return {
        user:state
    }

}
const mapDispatchToProps = (dispatch)=>{
    return{
        addUser: (obj)=>dispatch(addUsers(obj)),
    }
}
const Form = (props) => {
  const [error, setError] = useState(null);
    const [value,setValue] = useState([])
    const handleChange =(event) =>{
        setValue(event.target.value)
    }
  const handleSubmit = (event) => {

      event.preventDefault();

      if ( event.target.userName.value !== '') {
          props.logIn();
          props.addUser(value);
          setError(null);

      } else if  (event.keyCode === 13){
          props.logIn();
          props.addUser(value);
          setError(null);
      } else {
          setError('Details do not match')
      }

  }
  return (
    <form onSubmit={handleSubmit}>
      <MyInput
        label='user'
        labelFor='login'
        type='text'
        id='userName'
        placeholder='user'
        onChange={handleChange}
      />
      <p>{error}</p>
      <div className={s.btn}>
        <MyButton onClick={() => props.close()} type='button'>
          Cancel
        </MyButton>
        <MyButton  type='submit'>
          Confirm
        </MyButton>
      </div>
    </form>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(Form);
