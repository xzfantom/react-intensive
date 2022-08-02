export default function formValidation() {
  const {
    firstName,
    lastName,
    birthDate,
    phone,
    site,
    about,
    technologies,
    project,
  } = this.state;
  let isValid = true;
  const errors = {};
  const nameRegexp = /^[A-Z]/;
  const phoneRegexp = /^\d+$/;
  const siteRegexp = /^https:\/\//;
  const maxLengthTextArea = 600;

  if (firstName.trim().length === 0) {
    errors.firstNameIsRequired = "First name is required";
    isValid = false;
  } else if (!nameRegexp.test(firstName)) {
    errors.firstNameFirstLetter =
      "First name should start with the uppercase symbol";
    isValid = false;
  }
  if (lastName.trim().length === 0) {
    errors.lastNameIsRequired = "Last name is required";
    isValid = false;
  } else if (!nameRegexp.test(lastName)) {
    errors.lastNameFirstLetter =
      "Last name should start with the uppercase symbol";
    isValid = false;
  }
  if (birthDate === "") {
    errors.birthDateIsEmpty = "Birth date is required";
    isValid = false;
  }
  if (phone === "") {
    errors.phoneIsEmpty = "Phone number is required";
    isValid = false;
  } else if (phone.length > 12) {
    errors.phoneLimitExceed = `Phone number can contain not more then 12 symbols, now it contains ${phone.length} symbols`;
    isValid = false;
  } else if (!phoneRegexp.test(phone.replace(/-/g, ""))) {
    errors.phoneWrongFormat = "Please enter numbers only";
    isValid = false;
  }
  if (site === "") {
    errors.siteIsEmpty = "Site address is required";
    isValid = false;
  } else if (!siteRegexp.test(site)) {
    errors.siteNotValid = "Site address should start with https:// ";
    isValid = false;
  }
  if (about.length === 0) {
    errors.aboutIsEmpty = "Please write something about youself";
    isValid = false;
  }
  if (about.length > maxLengthTextArea) {
    errors.aboutLengthExceed = `Max length ${maxLengthTextArea} symbols exceed`;
    isValid = false;
  }
  if (project.length === 0) {
    errors.projectIsEmpty =
      "Please provide a short description of your last project";
    isValid = false;
  }
  if (project.length > maxLengthTextArea) {
    errors.projectLengthExceed = `Max length ${maxLengthTextArea} symbols exceed`;
    isValid = false;
  }
  if (technologies.length === 0) {
    errors.technologiesIsEmpty = "Please write what technologies you know";
    isValid = false;
  }
  if (technologies.length > maxLengthTextArea) {
    errors.technologiesLengthExceed = `Max length ${maxLengthTextArea} symbols exceed`;
    isValid = false;
  }

  this.setState({ errors });
  return isValid;
}
