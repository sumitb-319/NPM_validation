// index.js

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhoneNumber = (phone) => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Supports international format
  return phoneRegex.test(phone);
};

const validateCreditCard = (cardNumber) => {
  const cardRegex = /^\d{13,19}$/; // 13 to 19 digits
  return cardRegex.test(cardNumber);
};

const validateURL = (url) => {
  try {
    new URL(url); // Built-in validation using URL constructor
    return true;
  } catch (e) {
    return false;
  }
};

const checkPasswordStrength = (password) => {
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return strongPasswordRegex.test(password);
};

module.exports = {
  validateEmail,
  validatePhoneNumber,
  validateCreditCard,
  validateURL,
  checkPasswordStrength,
};
