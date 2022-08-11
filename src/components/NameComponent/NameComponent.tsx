import React, {ChangeEvent, useState} from 'react';
import { setUsername } from '../../redux/usernameSlice';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './NameComponent.module.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';

const NameComponent = () => {
    const [name, setName] = useState('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const save = () => {
        dispatch(setUsername(name));
        navigate('/todos');
    }
    
    return (
        <div className={styles.header}>
            <h1>Введите ваше имя:</h1>
            <Input onChange={onChange} className={styles.input}/>
            <Button onClick={save} text='Создать'/>
        </div>
    );
}

export default NameComponent;