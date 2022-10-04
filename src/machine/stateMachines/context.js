export const context = {
  accountType: "",
  accountDetails: {},
  militaryName: "",
  isIndianUniversity: "",
  selectedAction: "",
  buisnessInformation: {
    contactDetails: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNum: "",
    },
    buisnessDetails: {},
  },
  paymentInformation: {
    paymentMethod: "",
    bankDetails: {
      accountNumber: "",
      bankName: "",
    },
  },
  isEditFlow: false,
};
const vetContext = {
  ...context,
  accountType: "vet",
};

export { vetContext };
