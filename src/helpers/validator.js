export const isValidEmail = (email) => {
  const valid = new RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  return valid.test(email);
};

export const isValidPassword = (password) => {
  const validate = new RegExp(
    /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
  );
  return validate.test(password);
};

export const isValidNumber = (number) => {
  const valid = new RegExp(/^[-+]?[0-9]+$/);
  return valid.test(number);
};

export const upperFirst = (word) => {
  if (word.length === 1) {
    return word.toUpperCase();
  }
  return word.charAt(0).toUpperCase() + word.substring(1);
};
