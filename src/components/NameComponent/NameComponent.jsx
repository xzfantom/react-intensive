import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setUsername } from '../../redux/usernameSlice';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './NameComponent.module.css';
import { useNavigate } from 'react-router-dom';

function NameComponent() {
    const [name, setName] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChange = function(event) {
        setName(event.target.value);
    }

    const save = function() {
        dispatch(setUsername(name));
        navigate('/todos');
    }
    
    return (
        <div className={styles.header}>
            <h1>Введите ваше имя:</h1>
            <Input onChange={onChange}/>
            <Button onClick={save} text='Создать'/>
        </div>
    );
}

export default NameComponent;