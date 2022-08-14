import React from "react";
import {Link} from 'react-router-dom';

const Form:React.FC = ({onChange}) => {
    const handleNameChange= (event: { target: { value: string; }; }) => {
        onChange(event.target.value)
    }

    return <>
    <div className="wrapper">
        <form className='form-group custom-form'>
        <label>Авторизация</label>
        <div className='input-and-btn'>
        <input 
           className='form-control' 
            onChange={handleNameChange}>
            </input>          
            <button className='btn btn btn-danger btn-md'>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/todo'>Дальше</Link>
            </button>
        </div>
         
        </form>
    </div>
    </>
}

export {Form}