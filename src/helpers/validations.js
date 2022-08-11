const validationRegExps = {
  firstName: /^([А-Я]|[A-Z])(\D)*$/,
  lastName: /^([А-Я]|[A-Z])(\D)*$/,
  date_of_birth: /^(19[0-9][0-9]|20[01][0-9]|2010)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
  telephone: /^.{12}$/,
  web_site: /^https:\/\/.*$/i,
  about: /^.{0,600}$/,
  skills: /^.{0,600}$/,
  last_project_description: /^.{1,600}$/,
};
const validationIsNotEmpty = /(?!^$)([^\s])/;

export { validationRegExps, validationIsNotEmpty };
