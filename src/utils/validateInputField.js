export const isValidEmail = (email) => {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  return email.match(emailRegex);
};

export const isValidPhoneNumber = (phone) => {
  const phoneRegex = /^\d{11}$/;
  return phone.match(phoneRegex);
};

export const isValidAccountNumber = (accountNumber) => {
  const accountNumberRegex = /^\d{10}$/;
  return accountNumber.match(accountNumberRegex);
};

export const isValidBankName = (bankName) => {
  const bankNameRegex = /^[a-zA-Z]{4,15}$/;
  return bankName.match(bankNameRegex);
};
