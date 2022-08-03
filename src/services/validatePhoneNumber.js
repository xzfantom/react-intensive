export const validatePhoneNumber = (phone) => {
  return phone
    .replace(/\D/g, "")
    .replace(/^(\d{1})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d)/, "$1-$2")
    .replace(/^(\d{1}-\d{4})(-\d{2})(\d)/, "$1$2-$3");
};
