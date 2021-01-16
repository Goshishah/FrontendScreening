import React from "react";
import "./app-checkbox.css";

const AppCheckBox = ({ element }) => {
  const { label, type } = element;
  console.log("type, ", type);
  return (
    <div className="form-field">
      <label className="app-label">{label}</label>
      <input className="app-checkbox" type={type} />
    </div>
  );
};

export default AppCheckBox;
