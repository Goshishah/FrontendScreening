import React, { useEffect, useState } from "react";
import AppCheckBox from "../AppCheckBox/AppCheckBox.js";
import AppInput from "../AppInput/AppInput.js";
import AppSelect from "../AppSelect/AppSelect.js";
import formData from "../data.js";
import "./app-form.css";

const AppForm = () => {
  const [form, setForm] = useState({
    FullName: [],
    HomeAddress: [],
  });

  const getFormAPI = () => formData;

  useEffect(() => {
    const form = getFormAPI();
    setForm(form);
  }, []);

  console.log("form........", form, Object.keys(form));
  return (
    <form className="app-form">
      {Object.keys(form).map((key) => {
        return (
          <section className="form-section">
            <div className="section-heading">{key}</div>
            {form[key].map((element) => {
              return <FormFields element={element} />;
            })}
          </section>
        );
      })}
    </form>
  );
};

const FormFields = ({ element }) => {
  const { type } = element;
  console.log("type,,,,,,,,,", type, element);
  const fields = {
    checkbox: <AppCheckBox element={element} />,
    select: <AppSelect element={element} />,
  };
  return fields[type] || <AppInput element={element} />;
};

export default AppForm;
