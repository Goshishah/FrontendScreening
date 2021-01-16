import React from "react";
import "./app-input.css";
const AppInput = ({ element }) => {
  const { label, type, definition, ...rest } = element;
  return (
    <div className="form-field">
      <label className="app-label">{label}</label>
      <input
        className="input-field"
        type={type}
        placeholder={definition}
        {...rest}
      />
    </div>
  );
};

export default AppInput;
