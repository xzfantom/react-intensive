const errorsTextTemplate = {
  name: 'Первый символ должен быть заглавной буквой',
  family_name: 'Первый символ должен быть заглавной буквой',
  date_of_birth: 'Год рождения должен быть в диапазоне 1900-2010',
  tel: 'Номер телефона должен быть введен в формате Х-ХХХХ-ХХ-ХХ',
  web_site: 'Адрес веб-сайта должен начинаться с https://',
  about: 'Текст не может содержать более 600 символов',
  skills: 'Текст не может содержать более 600 символов',
  last_proj_description: 'Текст не может содержать более 600 символов',
};

const emptyErrorText = 'Поле обязательно к заполнению';
export { errorsTextTemplate, emptyErrorText };
