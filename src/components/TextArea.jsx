import styles from "./TextArea.module.css";
import React from "react";

class TextArea extends React.Component {
  render() {
    const { title, placeholder, name, value, onChange } = this.props;
    return (
      <div className={styles.description}>
        <label className={styles.label}>{title}</label>
        <textarea
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          rows={7}
          cols={42}
        />
      </div>
    );
  }
}

export default TextArea;
