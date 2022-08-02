const validationRegExps = {
  name: /^[A-Z].*$/,
  family_name: /^[A-Z].*$/,
  date_of_birth: '',
  tel: /[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}/,
  web_site: /^https|HTTPS:\/\/.*$/,
  about: '',
  skills: '',
  last_proj_description: '',
};

export default validationRegExps;
