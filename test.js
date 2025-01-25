const {
  validateEmail,
  validatePhoneNumber,
  validateCreditCard,
  validateURL,
  checkPasswordStrength,
} = require('./index');

// Test cases
console.log(validateEmail('test@example.com')); // true
console.log(validatePhoneNumber('+1234567890')); // true
console.log(validateCreditCard('4111111111111111')); // true
console.log(validateURL('https://example.com')); // true
console.log(checkPasswordStrength('Str0ng@Pass1')); // true
