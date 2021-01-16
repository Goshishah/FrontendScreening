import React from "react";
import "./app-select.css";
const AppSelect = ({ element }) => {
  const { label, sourceList } = element;
  return (
    <div className="form-field">
      <label className="app-label">{label}</label>
      <select className="app-select">
        {sourceList.map(({ name, code }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AppSelect;
