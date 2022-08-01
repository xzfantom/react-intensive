import { formDefault } from "./initialFormState";

const validateForm = (values) => {
  const newErrors = { ...formDefault };

  if (!/[A-Z]|[А-Я]/.test(values.name.charAt(0))) {
    newErrors.name = "Первый символ это всегда большая буква";
  }

  if (!/[A-Z]|[А-Я]/.test(values.surname.charAt(0))) {
    newErrors.surname = "Первый символ это всегда большая буква";
  }

  if (values.birthDate === "") {
    newErrors.birthDate = "Некорректный ввод";
  }

  if (values.phone.length < 12) {
    newErrors.phone = "Некорректный ввод номера телефона, минимум 9 символов";
  }

  if (!values.website.startsWith("https://")) {
    newErrors.website = "Сайт всегда должен начинаться с https://";
  }

  if (values.about.length > 600) {
    newErrors.about = "Превышен лимит символов в поле";
  }

  if (values.technologies.length > 600) {
    newErrors.technologies = "Превышен лимит символов в поле";
  }

  if (values.lastProject.length > 600) {
    newErrors.lastProject = "Превышен лимит символов в поле";
  }

  return newErrors;
};

export default validateForm;
