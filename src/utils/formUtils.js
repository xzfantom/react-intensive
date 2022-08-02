const checkEmpty = (object, name, errors) => {
  errors[name] = '';
  if (!object[name]) {
    errors[name] = 'Поле пустое. Заполните пожалуйста';
  }
}

const checkName = (object, name, errors) => {
  checkEmpty(object, name, errors)
  if (errors[name]) {
    return;
  }
  if (object[name].charAt(0) !== object[name].charAt(0).toUpperCase()) {
    errors[name] = 'Первый символ должен быть с большой буквы';
  }
}

const checkPhone = (object, name, errors) => {
  checkEmpty(object, name, errors)
  if (errors[name]) {
    return;
  }
  if (!object[name].match(/\d-\d{4}-\d{2}-\d{2}/g)) {
    errors[name] = 'Телефон должен быть в формате X-XXXX-XX-XX';
  }
}

const checkSite = (object, name, errors) => {
  checkEmpty(object, name, errors)
  if (errors[name]) {
    return;
  }
  if (!object[name].startsWith('https://')) {
    errors[name] = 'Сайт должен начинаться с https://';
  }
}

const checkText = (object, name, errors) => {
  checkEmpty(object, name, errors)
  if (errors[name]) {
    return;
  }
  if (!object[name].length > 600) {
    errors[name] = 'Ограничение 600 символов';
  }
}

const validate = (object, error) => {
  checkName(object, 'name', error);
  checkName(object, 'secondname', error);
  checkEmpty(object, 'birthday', error);
  checkPhone(object, 'phone', error);
  checkSite(object, 'website', error);
  checkText(object, 'about', error);
  checkText(object, 'technologystack', error);
  checkText(object, 'lastproject', error);
}

const phoneFormat = (value) => {
  const numbers = value.replace(/\D/g, '');
  const x = numbers.match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
  return !x[2] ? x[1] : x[1] + "-" + x[2] + (x[3] ? "-" + x[3] : "") + (x[4] ? "-" + x[4] : "");
}

export { validate, phoneFormat };