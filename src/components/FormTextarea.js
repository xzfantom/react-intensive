import { useState } from "react";
import './formTextarea.css';

const FormTextarea = (props) => {
    const [focused, setFocused] = useState(false);
    const {label, errorMessage, onChange, onChenge, id, ...textareaProps} = props;
    const handleFocus = (e) => {
        setFocused(true);
      };
    return (
        <div className="formTextarea">
            <label>{label}</label>
            <textarea
                {...textareaProps}
                onChange={onChange} 
                onBlur={handleFocus}
                focused={focused.toString()}
            ></textarea>
            <span>{errorMessage}</span>

            
        </div>
    )
}


export default FormTextarea