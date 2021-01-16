import React from "react";
import "./app-input.css";
const AppInput = ({ group, element, onChange }) => {
  const { id, label, type, definition, value, ...rest } = element;
  return (
    <div className="form-field">
      <label className="app-label">{label}</label>
      <input
        name={id}
        className="input-field"
        type={type}
        placeholder={definition}
        value={value}
        onChange={(e) => onChange(e, element, group)}
        {...rest}
      />
    </div>
  );
};

export default AppInput;
