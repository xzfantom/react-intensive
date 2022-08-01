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
            error
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

                   /{maxLength}
        </span>
                <span className={s.errorMax}>
          {error}
        </span>
            </>
        );
    }
}

export default CustomTextarea;
