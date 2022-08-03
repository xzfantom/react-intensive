import { useState, useEffect } from "react";
import Buttons from "../Buttons";
import TextAreas from "../TextAreas";
import Inputs from "../Inputs";
import { validatePhoneNumber } from "../../services/validatePhoneNumber";
import { formValidation } from "../../services/formValidation";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  birthDate: "",
  phone: "",
  site: "",
  about: "",
  technologies: "",
  project: "",
};

export default function Form({ onFormSubmit }) {
  const [formValues, setFormValues] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const onBlur = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trim() });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      onFormSubmit(formValues);
    }
  }, [formErrors, isSubmit, onFormSubmit, formValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setFormValues({ ...formValues, [name]: validatePhoneNumber(value) });
      return;
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(formValidation(formValues));
    setIsSubmit(true);
  };

  const resetForm = () => {
    setFormValues(INITIAL_STATE);
    setFormErrors({});
    setIsSubmit(false);
  };

  return (
    <form onSubmit={handleSubmit} onReset={resetForm}>
      <Inputs
        onInputChange={handleChange}
        textValue={formValues}
        onBlur={onBlur}
        formErrors={formErrors}
      />
      <TextAreas
        onTextAreaChange={handleChange}
        textValue={formValues}
        onBlur={onBlur}
        formErrors={formErrors}
      />
      <Buttons />
    </form>
  );
}
