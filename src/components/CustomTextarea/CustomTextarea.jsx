import {Component} from "react";
import s from './CustomTextarea.module.css'

class CustomTextarea extends Component {
    render() {
        const {
            name,
            onChange,
            state,
            label,
            rows,
            placeholder,
            maxLength,
            onBlur,
            length,
            length2,
            length3,
            error,
            error2,
            error3,
        } = this.props;

        return (
            <>
                <label>{label}</label>
                <textarea
                    rows={rows}
                    value={state[name]}
                    placeholder={placeholder}
                    onChange={onChange}
                    name={name}
                    onBlur={onBlur}
                    className="textareaItem"
                ></textarea>
                <span className="counter">
          {length}
                    {length2}
                    {length3}/{maxLength}
        </span>
                <span className={s.errorMax}>
          {error}
                    {error2}
                    {error3}
        </span>
            </>
        );
    }
}

export default CustomTextarea;
