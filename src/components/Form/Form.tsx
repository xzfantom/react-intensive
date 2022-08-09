import React, {ChangeEvent, FC, FormEvent} from 'react';
import styles from './form.module.css';

interface FormProps {
    buttonName: string;
    placeholder: string;
    onSubmit: ( e: FormEvent<HTMLFormElement> ) => void;
    value: string;
    onChange: ( e: ChangeEvent<HTMLInputElement> ) => void;
}

const Form: FC<FormProps> =
    ({
       buttonName,
       placeholder,
       onSubmit,
       value,
       onChange
    }) => {
        return (
            <form onSubmit = { onSubmit } className = { styles.formWrapper }>
                <input
                    type = "text"
                    placeholder = { placeholder }
                    className = { styles.inputField }
                    onChange = { onChange }
                    value = { value }
                />
                <button type = "submit" className = { styles.submit }>
                    { buttonName }
                </button>
            </form>
        );
};

export default Form;