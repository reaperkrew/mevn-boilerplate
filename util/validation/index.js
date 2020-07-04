/* eslint-disable no-useless-escape */
const validEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

/**
 * Password validation RegEx for JavaScript
 *
 * Passwords must be
 * - At least 8 characters long, max length 128
 * - Include at least 1 lowercase letter
 * - 1 capital letter
 * - 1 number
 * - 1 special character => !@#$%^&*
 *
 * @author Harish Chaudhari <harishchaudhari.com>
 * https://gist.github.com/HarishChaudhari/0dd5514ce430991a1b1b8fa04e8b72a4
 *
 */
const validPassword = (password) => {
  const re = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,128}$/;
  return re.test(password);
};

module.exports = {
  validEmail,
  validPassword,
};
