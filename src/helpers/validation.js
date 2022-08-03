const validationRegExps = {
  name: /^[А-Я]|[A-Z].*$/,
  family_name: /^[А-Я]|[A-Z].*$/,
  date_of_birth: /^(19[0-9][0-9]|20[01][0-9]|2010)/,
  tel: /^[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
  web_site: /^https:\/\/|HTTPS:\/\/.*$/,
  about: /^.{1,600}$/,
  skills: /^.{1,600}$/,
  last_proj_description: /^.{1,600}$/,
};
const validationIsNotEmpty = /(?!^$)([^\s])/;

export { validationRegExps, validationIsNotEmpty };
