const errorsTextTemplate = {
  firstName: 'Имя должно состоять из букв, первая из которых - заглавная',
  lastName: 'Фамилия должна состоять из букв, первая из которых - заглавная',
  date_of_birth: 'Год рождения должен быть в диапазоне 1900-2010',
  telephone: 'Номер телефона должен состоять из 9 цифр',
  web_site: 'Адрес веб-сайта должен начинаться с https://',
  about: '',
  skills: '',
  last_project_description: '',
};

const emptyErrorText = 'Поле пустое. Заполните, пожалуйста';
export { errorsTextTemplate, emptyErrorText };
