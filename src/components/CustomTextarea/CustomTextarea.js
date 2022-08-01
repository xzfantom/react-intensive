import {Component} from "react";
import s from "./CustomTextAria.module.css";

class CustomTextarea extends Component {
    render() {
        const {name, onChange, state, label, rows, placeholder, onBlur} =
            this.props;

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
                ></textarea>
            </>
        );
    }
}

export default CustomTextarea;