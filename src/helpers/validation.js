// const validationFunctions = (value, name)=> {
//   // name: /^([А-Я]|[A-Z])(\D)*$/,
//   // family_name: /^([А-Я]|[A-Z])(\D)*$/,
//   // date_of_birth: /^(19[0-9][0-9]|20[01][0-9]|2010)/,
//   tel: ()=>{
//     if()
//     validationRegExps[name].test(value)},
//   // web_site: /^https:\/\/|HTTPS:\/\/.*$/,
//   // about: /^.{0,600}$/,
//   // skills: /^.{0,600}$/,
//   // last_proj_description: /^.{1,600}$/,
// };

const validationRegExps = {
  firstName: /^([А-Я]|[A-Z])(\D)*$/,
  lastName: /^([А-Я]|[A-Z])(\D)*$/,
  date_of_birth: /^(19[0-9][0-9]|20[01][0-9]|2010)/,
  telephone: /^.{12}$/,
  web_site: /^https:\/\/|HTTPS:\/\/.*$/,
  about: /^.{0,600}$/,
  skills: /^.{0,600}$/,
  last_project_description: /^.{1,600}$/,
};
const validationIsNotEmpty = /(?!^$)([^\s])/;

export { validationRegExps, validationIsNotEmpty };
