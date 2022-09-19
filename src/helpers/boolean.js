const EMAIL_REGEX =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const USERNAME_REGEX = /^[a-z0-9_-]{3,16}$/;

export const validateEmailOrUsername = (value) => {
  if (!validateUsername(value) && !validateEmail(value)) {
    return false;
  }
  return true;
};

export const validateUsername = (value) => {
  return USERNAME_REGEX.test(value);
};

export const validateEmail = (value) => {
  return EMAIL_REGEX.test(value);
};
