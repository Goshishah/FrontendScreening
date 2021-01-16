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

  const handleChange = (event, element, group) => {
    const { name, value } = event.target;
    console.log("on change.......", group, element);
    const updatedGroup = form[group].map((item) => {
      if (item.id === name) {
        return { ...item, value };
      }
      return item;
    });
    setForm({ ...form, [group]: updatedGroup });
  };

  return (
    <form className="app-form">
      {Object.keys(form).map((key) => {
        return (
          <section className="form-section">
            <div className="section-heading">{key}</div>
            {form[key].map((element) => {
              return (
                <FormFields
                  group={key}
                  element={element}
                  onChange={handleChange}
                />
              );
            })}
          </section>
        );
      })}
    </form>
  );
};

const FormFields = ({ group, element, onChange }) => {
  const { type } = element;
  const fields = {
    checkbox: (
      <AppCheckBox element={element} group={group} onChange={onChange} />
    ),
    select: <AppSelect element={element} group={group} onChange={onChange} />,
  };
  return (
    fields[type] || (
      <AppInput element={element} group={group} onChange={onChange} />
    )
  );
};

export default AppForm;
